// src/pages/ResultadosPage.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { Typography, Select, Option, Tabs, TabsHeader, TabsBody, Tab, TabPanel, Card, CardBody } from '@material-tailwind/react';
import { availableYears, championshipsMock, eventsMock, stageResultsMock, standingsMock } from '../data/resultsMock';
import { ChampionshipWithYear, EventMock, StageResult, ChampionshipStanding } from '../data/resultsMock'; // Import interfaces if defined separately
import { parseISO } from 'date-fns';

const ResultadosPage: React.FC = () => {
  const currentYear = new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState<string>(currentYear);
  const [availableChampionships, setAvailableChampionships] = useState<ChampionshipWithYear[]>([]);
  const [selectedChampionshipId, setSelectedChampionshipId] = useState<string | null>(null);
  const [selectedChampionship, setSelectedChampionship] = useState<ChampionshipWithYear | null>(null);

  const [latestStageResults, setLatestStageResults] = useState<StageResult[]>([]);
  const [latestStageInfo, setLatestStageInfo] = useState<EventMock | null>(null);
  const [championshipStandings, setChampionshipStandings] = useState<ChampionshipStanding[]>([]);

  const [activeStageTab, setActiveStageTab] = useState<string | null>(null);
  const [activeStandingTab, setActiveStandingTab] = useState<string | null>(null);

  // Atualiza campeonatos disponíveis quando o ano muda
  useEffect(() => {
    const filteredChamps = championshipsMock.filter(c => c.year.toString() === selectedYear);
    setAvailableChampionships(filteredChamps);
    setSelectedChampionshipId(null); // Reseta seleção de campeonato
    setSelectedChampionship(null);
    setLatestStageResults([]);
    setLatestStageInfo(null);
    setChampionshipStandings([]);
    setActiveStageTab(null);
    setActiveStandingTab(null);
  }, [selectedYear]);

  // Atualiza dados exibidos quando o campeonato muda
  useEffect(() => {
    if (!selectedChampionshipId) {
        setSelectedChampionship(null);
        setLatestStageResults([]);
        setLatestStageInfo(null);
        setChampionshipStandings([]);
        setActiveStageTab(null);
        setActiveStandingTab(null);
        return;
    };

    const champ = availableChampionships.find(c => c.id === selectedChampionshipId);
    setSelectedChampionship(champ || null);

    if (champ) {
        // Encontra a última etapa realizada para este campeonato
        const completedEvents = eventsMock
            .filter(e => e.championshipId === champ.id && e.status === 'Realizado')
            .sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime()); // Mais recente primeiro

        const latestEvent = completedEvents.length > 0 ? completedEvents[0] : null;
        setLatestStageInfo(latestEvent);

        // Filtra os resultados da última etapa
        const results = latestEvent
            ? stageResultsMock.filter(r => r.stageId === latestEvent.stageId)
            : [];
        setLatestStageResults(results);

        // Filtra a classificação do campeonato
        const standings = standingsMock
            .filter(s => s.championshipId === champ.id)
            .sort((a, b) => b.totalPoints - a.totalPoints) // Ordena por pontos
            .map((s, index) => ({ ...s, position: index + 1 })); // Adiciona posição
        setChampionshipStandings(standings);

        // Define a aba ativa inicial (primeira categoria)
        if (champ.categories.length > 0) {
            setActiveStageTab(champ.categories[0].name);
            setActiveStandingTab(champ.categories[0].name);
        } else {
             setActiveStageTab(null);
             setActiveStandingTab(null);
        }

    }
  }, [selectedChampionshipId, availableChampionships]);


  // --- Funções para lidar com mudança nos Selects ---
  const handleYearChange = (value: string | undefined) => {
    if (value) setSelectedYear(value);
  };

  const handleChampionshipChange = (value: string | undefined) => {
    setSelectedChampionshipId(value || null);
  };

  // --- Componente de Tabela Reutilizável ---
  const ResultsTable: React.FC<{ data: (StageResult | ChampionshipStanding)[], type: 'stage' | 'standing' }> = ({ data, type }) => {
      if (data.length === 0) {
          return <Typography placeholder={undefined} className="text-center text-gray-600 py-4">Nenhum resultado disponível para esta categoria.</Typography>;
      }

      return (
          <div className="overflow-x-auto">
              <table className="w-full min-w-max table-auto text-left border-collapse">
                  <thead>
                      <tr className="bg-blue-gray-50">
                          <th className="border-b border-blue-gray-100 p-3">Pos.</th>
                          <th className="border-b border-blue-gray-100 p-3">Piloto</th>
                          <th className="border-b border-blue-gray-100 p-3">Pontos</th>
                          {type === 'stage' && (
                              <th className="border-b border-blue-gray-100 p-3">Melhor Volta</th>
                          )}
                      </tr>
                  </thead>
                  <tbody>
                      {data.map((item, index) => (
                          <tr key={index} className="even:bg-blue-gray-50/50">
                              <td className="p-3 border-b border-blue-gray-50">
                                  <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined}>
                                      {type === 'stage' ? (item as StageResult).position : (item as ChampionshipStanding).position}
                                  </Typography>
                              </td>
                              <td className="p-3 border-b border-blue-gray-50">
                                   <Typography variant="small" color="blue-gray" className="font-semibold" placeholder={undefined}>
                                      {item.pilotName}
                                   </Typography>
                              </td>
                              <td className="p-3 border-b border-blue-gray-50">
                                   <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined}>
                                      {type === 'stage' ? (item as StageResult).points : (item as ChampionshipStanding).totalPoints}
                                   </Typography>
                              </td>
                              {type === 'stage' && (
                                  <td className="p-3 border-b border-blue-gray-50">
                                      <Typography variant="small" color="blue-gray" className="font-normal" placeholder={undefined}>
                                          {(item as StageResult).fastestLap || '-'}
                                      </Typography>
                                  </td>
                              )}
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      );
  };


  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-12">
      <Typography as="h2" variant="h2" color="blue-gray" placeholder={undefined} className="text-center border-b pb-3 mb-8">
        Resultados e Classificação
      </Typography>

      {/* --- Seletores --- */}
      <Card placeholder={undefined} shadow={false} className="border border-blue-gray-100">
        <CardBody placeholder={undefined} className="flex flex-col md:flex-row gap-4 items-center">
          <div className='w-full md:w-1/3'>
            <Select
              label="Selecione a Temporada (Ano)"
              value={selectedYear}
              onChange={handleYearChange}
              placeholder={undefined} // Prop necessária
              // labelProps={{ className: "peer-placeholder-shown:text-blue-gray-500" }}
            >
              {availableYears.map(year => (
                <Option key={year} value={year}>{year}</Option>
              ))}
            </Select>
          </div>
          <div className='w-full md:w-2/3'>
            <Select
              label="Selecione o Campeonato"
              value={selectedChampionshipId || ""} // Select espera string ou undefined, não null
              onChange={handleChampionshipChange}
              disabled={availableChampionships.length === 0}
              placeholder={undefined} // Prop necessária
             >
               {availableChampionships.length > 0 ? (
                 availableChampionships.map(champ => (
                   <Option key={champ.id} value={champ.id}>{champ.name}</Option>
                 ))
               ) : (
                 // Mostra uma opção desabilitada se não houver campeonatos
                 <Option value="" disabled>Nenhum campeonato para {selectedYear}</Option>
               )}
            </Select>
          </div>
        </CardBody>
      </Card>

      {/* --- Seção: Resultados da Última Etapa --- */}
      {selectedChampionship && latestStageInfo && (
        <Card placeholder={undefined} className="mt-8">
          <CardBody placeholder={undefined}>
             <Typography as="h3" variant="h4" color="blue-gray" placeholder={undefined} className="mb-1 font-semibold">
               Resultados Pilotos
             </Typography>
             <Typography placeholder={undefined} color="gray" className="mb-5 text-sm">
                 Última etapa realizada: {selectedChampionship.name} - Etapa {latestStageInfo.stage} ({latestStageInfo.kartodromo})
             </Typography>

             <Tabs value={activeStageTab || 'default'} className="overflow-visible"> {/* Adicionado overflow-visible */}
               <TabsHeader
                  className="relative z-0" // Ajuste para contexto de stacking
                  placeholder={undefined}
                >
                 {selectedChampionship.categories.map(({ name }) => (
                   <Tab key={name} value={name} onClick={() => setActiveStageTab(name)} placeholder={undefined}>
                     {name}
                   </Tab>
                 ))}
               </TabsHeader>
               <TabsBody placeholder={undefined}
                 animate={{ // Animação opcional
                    initial: { y: 250 },
                    mount: { y: 0 },
                    unmount: { y: 250 },
                  }}
               >
                 {selectedChampionship.categories.map(({ name }) => (
                   <TabPanel key={name} value={name} className="p-0 pt-5"> {/* Removido padding e adicionado pt */}
                      <ResultsTable
                          data={latestStageResults.filter(r => r.categoryName === name)}
                          type="stage"
                      />
                   </TabPanel>
                 ))}
               </TabsBody>
             </Tabs>
          </CardBody>
        </Card>
      )}
      {selectedChampionship && !latestStageInfo && (
           <Typography placeholder={undefined} className="text-center text-gray-600 mt-8">Nenhuma etapa realizada encontrada para este campeonato.</Typography>
      )}


      {/* --- Seção: Classificação do Campeonato --- */}
      {selectedChampionship && championshipStandings.length > 0 && (
         <Card placeholder={undefined} className="mt-12">
           <CardBody placeholder={undefined}>
              <Typography as="h3" variant="h4" color="blue-gray" placeholder={undefined} className="mb-5 font-semibold">
                Classificação do Campeonato
              </Typography>

               <Tabs value={activeStandingTab || 'default'} className="overflow-visible">
                <TabsHeader placeholder={undefined}  className="relative z-0">
                  {selectedChampionship.categories.map(({ name }) => (
                    <Tab key={name} value={name} onClick={() => setActiveStandingTab(name)} placeholder={undefined}>
                      {name}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody placeholder={undefined}
                   animate={{ initial: { y: 250 }, mount: { y: 0 }, unmount: { y: 250 } }}
                >
                  {selectedChampionship.categories.map(({ name }) => (
                    <TabPanel key={name} value={name} className="p-0 pt-5">
                       <ResultsTable
                           data={championshipStandings.filter(s => s.categoryName === name)}
                           type="standing"
                       />
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
           </CardBody>
         </Card>
      )}
       {selectedChampionship && championshipStandings.length === 0 && (
           <Typography placeholder={undefined} className="text-center text-gray-600 mt-8">Nenhuma classificação disponível para este campeonato.</Typography>
      )}


      {/* Mensagem se nenhum campeonato for selecionado */}
       {!selectedChampionshipId && availableChampionships.length > 0 && (
            <Typography placeholder={undefined} className="text-center text-gray-600 mt-8">Selecione um campeonato para ver os resultados.</Typography>
       )}

    </div>
  );
};

export default ResultadosPage;
// src/pages/CalendarioPage.tsx (Atualizado)
import React, { useMemo } from 'react';
// 1. Importar os novos dados
import { calendarEventsData, YEAR } from '../data/calendarEventsData'; // Ajuste o caminho se necessário
import { Stage, EventStatus, ProcessedStage } from '../types'; // Use a interface Stage/ChampionshipEvent
import { Typography, Card, CardBody, Chip } from "@material-tailwind/react";
// 2. Importar funções do date-fns para comparação e formatação
import { format, parseISO, getMonth, getYear, isPast, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FaMapMarkerAlt } from 'react-icons/fa';

// Função auxiliar para obter o nome do mês e ano para agrupamento
const getMonthYearKey = (date: Date): string => {
  return format(date, 'MMMM yyyy', { locale: ptBR }); // Mês por extenso e ano
};

// 3. Função para determinar o status dinamicamente
const getDynamicStatus = (eventDateString: string, predefinedStatus?: EventStatus): EventStatus => {
  // 1. Prioriza status pré-definidos que não podem ser calculados pela data
  if (predefinedStatus === 'Cancelado' || predefinedStatus === 'Adiado') {
      return predefinedStatus;
  }

  // 2. Calcula 'Realizado' ou 'Próximo' com base na data
  try {
      const eventDate = parseISO(eventDateString);
      if (!isValid(eventDate)) {
           console.error("Data inválida para status:", eventDateString);
           return 'Próximo'; // Status padrão para datas inválidas
      }
      const now = new Date();
      // Zera horas para comparar apenas a data
      const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
      const todayDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      // Se a data do evento for anterior a hoje, está Realizado
      if (eventDateOnly < todayDateOnly) {
          return 'Realizado';
      } else {
          // Se for hoje ou no futuro, está Próximo
          return 'Próximo';
      }
  } catch (error) {
       console.error("Erro ao processar data para status:", eventDateString, error);
       return 'Próximo'; // Fallback em caso de erro
  }
};

// Função para obter a cor do Chip baseado no status (sem alterações)
const getStatusColor = (status: EventStatus): any => {
  switch (status) {
    case 'Próximo': return 'blue';
    case 'Realizado': return 'green';
    case 'Cancelado': return 'red';
    case 'Adiado': return 'amber';
    default: return 'blue-gray';
  }
};

const CalendarioPage: React.FC = () => {

  // 4. Processa eventos: calcula status dinâmico e agrupa
  const eventsGroupedByMonth = useMemo(() => {
    const eventsWithDateObjects = calendarEventsData
      .map(event => {
        // event aqui é do tipo Stage (com status opcional)
        const dateObject = parseISO(event.date);
        if (!isValid(dateObject)) {
          console.warn("Ignorando evento com data inválida no mapeamento:", event.id, event.date);
          return null;
        }
        // Objeto intermediário, mantém o status original se existir
        return { ...event, dateObject };
      })
      .filter(event => event !== null)
      .sort((a, b) => a!.dateObject.getTime() - b!.dateObject.getTime());

    // Agrupa por Mês/Ano
    const grouped: { [key: string]: ProcessedStage[] } = eventsWithDateObjects.reduce(
      (acc, eventWithData) => {
        if(!eventWithData) return acc;

        const key = getMonthYearKey(eventWithData.dateObject);
        if (!acc[key]) { acc[key] = []; }

        // *** Calcula o status dinâmico AQUI, passando o status original (que pode ser undefined) ***
        const dynamicStatus = getDynamicStatus(eventWithData.date, eventWithData.status);

        // Cria o objeto final do tipo ProcessedStage
        const finalEvent: ProcessedStage = {
            ...eventWithData,       // Props de Stage + dateObject
            status: dynamicStatus, // Atribui o status final (calculado ou pré-definido)
        };
        acc[key].push(finalEvent);
        return acc;
      },
      {} as { [key: string]: ProcessedStage[] }
    );
    return grouped;
  }, []); // Dependência vazia, calcula só uma vez
  // Ordena as chaves de mês/ano para exibição correta
  const sortedMonthKeys = useMemo(() => {
      return Object.keys(eventsGroupedByMonth).sort((a, b) => {
         // Converte "Maio 2025" de volta para data para ordenar
         try {
             const dateA = new Date(a.replace(/(\w+)\s(\d+)/, '$1 1, $2')); // Simplista, pode falhar com outros locales
             const dateB = new Date(b.replace(/(\w+)\s(\d+)/, '$1 1, $2'));
             if (!isValid(dateA) || !isValid(dateB)) return 0;
             return dateA.getTime() - dateB.getTime();
         } catch (e) {
             console.error("Erro ao ordenar meses", a, b, e);
             return 0;
         }
      });
  }, [eventsGroupedByMonth]);


  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <Typography as="h2" variant="h2" color="blue-gray" placeholder={undefined} className="mb-8 border-b pb-2 text-center">
        Calendário de Eventos FKR {YEAR}
      </Typography>

      {sortedMonthKeys.length === 0 && (
          <Typography placeholder={undefined} className='text-center text-gray-600'>Nenhum evento encontrado para exibir.</Typography>
      )}

      <div className="space-y-10">
        {sortedMonthKeys.map((monthYear) => (
          <section key={monthYear}>
            {/* 5. Título do Mês (Capitalizado) */}
            <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-5 capitalize font-semibold text-center md:text-left">
              {monthYear}
            </Typography>
            {/* 6. Grid de Eventos (Ajustado para 1 ou 2 colunas para mais espaço) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {eventsGroupedByMonth[monthYear].map((event) => (
                // 7. Card do Evento (Conteúdo Atualizado)
                <Card key={event.id} shadow={true} className="border border-gray-200 hover:shadow-md transition-shadow" placeholder={undefined}>
                  <CardBody className="p-5 flex flex-col sm:flex-row gap-4" placeholder={undefined}>
                     {/* Coluna da Data */}
                     <div className='flex-shrink-0 text-center border-r border-gray-200 pr-4 mr-4 sm:border-r-0 sm:pr-0 sm:mr-0 sm:border-b sm:pb-2 sm:mb-2'>
                         <Typography as="span" variant="h5" color="red" textGradient placeholder={undefined} className="font-bold block">
                           {format(event.date, 'dd')} {/* Dia */}
                         </Typography>
                          <Typography as="span" variant="small" color="blue-gray" placeholder={undefined} className="font-medium block capitalize">
                            {format(event.date, 'MMM', { locale: ptBR })} {/* Mês Abreviado */}
                          </Typography>
                           <Typography as="span" variant="small" color="gray" placeholder={undefined} className="font-normal block capitalize">
                            {format(event.date, 'eee', { locale: ptBR })} {/* Dia da Semana Abreviado */}
                          </Typography>
                     </div>
                     {/* Coluna de Detalhes */}
                     <div className='flex-grow'>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                              {/* Nome do Evento */}
                              <Typography as="h6" variant="h6" color="blue-gray" placeholder={undefined} className="font-semibold leading-tight">
                                {event.name || event.championshipName || 'Evento FKR'}
                              </Typography>
                               {/* Nome do Campeonato (se diferente do nome do evento) */}
                              {event.championshipName && event.name !== event.championshipName && (
                                <Typography variant='small' color="blue-gray" placeholder={undefined} className="font-light text-xs">
                                  ({event.championshipName} - Etapa {event.stageNumber})
                                </Typography>
                              )}
                          </div>
                          {/* Status Dinâmico */}
                           <Chip
                              size="sm"
                              variant="ghost"
                              value={event.status} // Status calculado
                              color={getStatusColor(event.status)} // Cor baseada no status
                              className="capitalize flex-shrink-0 ml-2"
                            />
                        </div>
                         {/* Local e Horário */}
                         <div className="text-xs text-gray-600 space-y-1">
                            <div className="flex items-center gap-1.5">
                               <FaMapMarkerAlt className="w-3 h-3 text-gray-400 flex-shrink-0" />
                               <Typography as="span" placeholder={undefined} className="">{event.kartodromo}</Typography>
                            </div>
                            {/* Exibe horários das notas se existirem, senão o horário principal */}
                             <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-gray-400 flex-shrink-0"><path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V3Z" clipRule="evenodd" /></svg>
                               <Typography as="span" placeholder={undefined} className="">
                                 {event.notes?.includes('Horários:')
                                     ? event.notes.replace('Horários:', '').trim()
                                     : format(event.date, 'HH:mm', { locale: ptBR }) + 'h'
                                 }
                               </Typography>
                             </div>
                        </div>
                        {/* Notas adicionais (sem o horário) */}
                        {event.notes && !event.notes.includes('Horários:') && (
                           <Typography variant="small" color="blue-gray" placeholder={undefined} className="mt-2 pt-2 border-t border-gray-200/50 text-xs italic">
                              {event.notes}
                           </Typography>
                        )}
                     </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default CalendarioPage;
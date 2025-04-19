// src/pages/CalendarioPage.tsx
import React, { useMemo } from 'react';
import { eventsData } from '../data/events';
import { ChampionshipEvent } from '../types';
import { Typography, Card, CardBody, Chip } from "@material-tailwind/react";
import { format, parseISO, getMonth, getYear } from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Import locale for Portuguese month names
import { Link } from 'react-router-dom';

// Função auxiliar para obter o nome do mês e ano para agrupamento
const getMonthYearKey = (date: Date): string => {
  // Formato: "MMMM yyyy" (ex: "Maio 2025")
  return format(date, 'MMMM yyyy', { locale: ptBR });
};

// Função para obter a cor do Chip baseado no status
const getStatusColor = (status: ChampionshipEvent['status']): any /* Ajuste o tipo se souber os tipos exatos do Chip */ => {
  switch (status) {
    case 'Próximo': return 'blue';
    case 'Realizado': return 'green';
    case 'Cancelado': return 'red';
    case 'Adiado': return 'amber';
    default: return 'blue-gray';
  }
};

const CalendarioPage: React.FC = () => {

  // Processa e agrupa os eventos por mês/ano
  const eventsGroupedByMonth = useMemo(() => {
    // 1. Ordena os eventos por data (do mais antigo para o mais novo)
    const sortedEvents = [...eventsData].sort((a, b) =>
      parseISO(a.date).getTime() - parseISO(b.date).getTime()
    );

    // 2. Agrupa por Mês/Ano
    const grouped: { [key: string]: ChampionshipEvent[] } = sortedEvents.reduce(
      (acc, event) => {
        const eventDate = parseISO(event.date);
        const key = getMonthYearKey(eventDate); // Ex: "Maio 2025"
        if (!acc[key]) {
          acc[key] = []; // Cria o array para o mês/ano se não existir
        }
        acc[key].push(event); // Adiciona o evento ao grupo
        return acc;
      },
      {} as { [key: string]: ChampionshipEvent[] }
    );

    return grouped;
  }, []); // Dependência vazia para calcular apenas uma vez

  // Obtem as chaves (meses/anos) ordenadas
  const sortedMonthKeys = Object.keys(eventsGroupedByMonth).sort((a, b) => {
      // Precisamos converter "Maio 2025" de volta para uma data para ordenar os meses corretamente
      const [monthA, yearA] = a.split(' ');
      const [monthB, yearB] = b.split(' ');
      // Uma forma simples é criar datas fictícias (cuidado com a robustez para todos os locales)
      // Uma biblioteca poderia ajudar aqui, mas vamos tentar manualmente
      const dateA = new Date('${monthMap[monthA.toLowerCase()]} 1, ${yearA}');
      const dateB = new Date('${monthMap[monthB.toLowerCase()]} 1, ${yearB}');
       return dateA.getTime() - dateB.getTime();
  });

  // Mapeamento simples para ordenar meses (pode precisar de ajustes)
  const monthMap: { [key: string]: number } = {
    'janeiro': 1, 'fevereiro': 2, 'março': 3, 'abril': 4, 'maio': 5, 'junho': 6,
    'julho': 7, 'agosto': 8, 'setembro': 9, 'outubro': 10, 'novembro': 11, 'dezembro': 12
  };

  return (
    <div>
      <Typography as="h2" variant="h2" color="blue-gray" placeholder={undefined} className="mb-8 border-b pb-2">
        Calendário de Eventos FKR {new Date().getFullYear()} {/* Pode ajustar o ano */}
      </Typography>

      {sortedMonthKeys.length === 0 && (
          <Typography placeholder={undefined}>Nenhum evento agendado no momento.</Typography>
      )}

      <div className="space-y-10"> {/* Espaçamento entre os meses */}
        {sortedMonthKeys.map((monthYear) => (
          <section key={monthYear}>
            <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-5 capitalize font-semibold">
              {monthYear} {/* Ex: "Maio 2025" */}
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid para os cards */}
              {eventsGroupedByMonth[monthYear].map((event) => (
                <Card key={event.id} shadow={true} className="border border-gray-200 hover:shadow-lg transition-shadow" placeholder={undefined}>
                  <CardBody className="p-5" placeholder={undefined}>
                    <div className="flex justify-between items-start mb-3">
                      {/* Data formatada */}
                      <Typography as="span" variant="h6" color="blue-gray" placeholder={undefined} className="font-bold">
                        {format(parseISO(event.date), 'dd/MM')} {/* Dia/Mês */}
                      </Typography>
                      {/* Status */}
                       <Chip
                          size="sm"
                          variant="ghost"
                          value={event.status}
                          color={getStatusColor(event.status)}
                          className="capitalize"
                        />
                    </div>

                    {/* Nome do Campeonato (Linkável) */}
                    <Typography as="h5" variant="h5" color="blue-gray" placeholder={undefined} className="mb-1 font-semibold">
                      <Link to={`/campeonatos/${event.championshipId}`} className="hover:text-blue-600 transition-colors">
                         {event.championshipName}
                      </Link>
                    </Typography>

                    {/* Etapa */}
                    <Typography color="gray" placeholder={undefined} className="mb-3 font-normal">
                      Etapa {event.stage}
                    </Typography>

                     {/* Local e Horário */}
                     <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center gap-2">
                           {/* Ícone de Calendário (exemplo usando SVG inline) */}
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" /></svg>
                           <Typography as="span" placeholder={undefined} className="text-xs">
                             {format(parseISO(event.date), 'EEEE, dd \'de\' MMMM \'às\' HH:mm\'h\'', { locale: ptBR })}
                           </Typography>
                        </div>
                         <div className="flex items-center gap-2">
                             {/* Ícone de Localização (exemplo usando SVG inline) */}
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                             <Typography as="span" placeholder={undefined} className="text-xs">{event.kartodromo}</Typography>
                         </div>
                    </div>

                    {/* Notas adicionais */}
                    {event.notes && (
                        <Typography variant="small" color="blue-gray" placeholder={undefined} className="mt-3 pt-3 border-t border-gray-200 text-xs italic">
                            Nota: {event.notes}
                        </Typography>
                    )}

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

// Mapeamento simples para ordenar meses (pode precisar de ajustes)
const monthMap: { [key: string]: string } = { // Mapeia para nome de mês em inglês para Date()
    'janeiro': 'January', 'fevereiro': 'February', 'março': 'March', 'abril': 'April',
    'maio': 'May', 'junho': 'June', 'julho': 'July', 'agosto': 'August',
    'setembro': 'September', 'outubro': 'October', 'novembro': 'November', 'dezembro': 'December'
};


export default CalendarioPage;
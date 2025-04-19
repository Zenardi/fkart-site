// src/data/events.ts
import { ChampionshipEvent } from '../types';
import { format } from 'date-fns'; // Precisaremos instalar date-fns

// Exemplo de dados - Use datas futuras em relação a hoje (19/04/2025) para teste
export const eventsData: ChampionshipEvent[] = [
  {
    id: 'copa-fk-2025-etapa-5',
    championshipId: 'copa-fk-2025',
    championshipName: 'Copa Force Kart 2025',
    stage: 5,
    date: '2025-05-10T09:00:00Z', // 10 de Maio de 2025
    kartodromo: 'Kartódromo Internacional de Interlagos',
    status: 'Próximo',
  },
  {
    id: 'fk-endurance-series-etapa-3',
    championshipId: 'fk-endurance-series',
    championshipName: 'FK Endurance Series 2025',
    stage: 3,
    date: '2025-05-24T10:00:00Z', // 24 de Maio de 2025
    kartodromo: 'Kartódromo Granja Viana',
    status: 'Próximo',
  },
   {
    id: 'copa-fk-2025-etapa-6',
    championshipId: 'copa-fk-2025',
    championshipName: 'Copa Force Kart 2025',
    stage: 6,
    date: '2025-06-14T09:00:00Z', // 14 de Junho de 2025
    kartodromo: 'Kartódromo Internacional de Interlagos',
    status: 'Próximo',
  },
   {
    id: 'copa-fk-2025-etapa-7',
    championshipId: 'copa-fk-2025',
    championshipName: 'Copa Force Kart 2025',
    stage: 7,
    date: '2025-07-12T09:00:00Z', // 12 de Julho de 2025
    kartodromo: 'Kartódromo Aldeia da Serra',
    status: 'Próximo',
  },
   {
    id: 'fk-endurance-series-etapa-4',
    championshipId: 'fk-endurance-series',
    championshipName: 'FK Endurance Series 2025',
    stage: 4,
    date: '2025-07-26T10:00:00Z', // 26 de Julho de 2025
    kartodromo: 'Kartódromo Granja Viana',
    status: 'Próximo',
    notes: 'Etapa com pontuação dobrada.'
  },
  {
    id: 'copa-fk-2025-etapa-4', // Evento passado para exemplo
    championshipId: 'copa-fk-2025',
    championshipName: 'Copa Force Kart 2025',
    stage: 4,
    date: '2025-04-12T09:00:00Z', // 12 de Abril de 2025
    kartodromo: 'Kartódromo Aldeia da Serra',
    status: 'Realizado',
  },
];
// src/data/resultsMock.ts
import { Championship, Category, ChampionshipEvent } from '../types'; // Importe tipos existentes

// Anos disponíveis
export const availableYears: string[] = ['2025', '2024'];

// Estender Campeonato para incluir o ano (opcional, mas útil)
export interface ChampionshipWithYear extends Championship {
  year: number;
}

// Mock de Campeonatos (poderia vir do championships.ts e ser filtrado por ano)
// Vamos adicionar um campo 'year' para simplificar o filtro
export const championshipsMock: ChampionshipWithYear[] = [
  {
    id: 'copa-fk-2025', year: 2025, name: 'Copa Force Kart 2025',
    kartodromo: 'Kartódromo Internacional de Interlagos', location: 'São Paulo, SP', stages: 10,
    imageUrl: '/interlagos-track.jpg', kartodromoLogoUrl: '/images/kartodromos/logo-interlagos.png',
    regulationsContent: 'Regulamento...',
    categories: [
        { name: 'Graduados', ballast: '95kg', pricePerStage: 100 },
        { name: 'Sênior', ballast: '100kg', pricePerStage: 100 },
    ], description: 'Principal campeonato 2025.',
  },
  {
    id: 'fk-endurance-2025', year: 2025, name: 'FK Endurance Series 2025',
    kartodromo: 'Kartódromo Granja Viana', location: 'Cotia, SP', stages: 5,
    imageUrl: '/kgv-track.jpg', kartodromoLogoUrl: '/images/kartodromos/logo-kgv.png',
    regulationsContent: 'Regulamento Endurance...',
    categories: [ { name: 'Light', ballast: 'Média 95kg', pricePerStage: 150 },

        { name: 'Strong', ballast: 'Média 105kg', pricePerStage: 150 }
    ],
    description: 'Endurance 2025.',
  },
   { // Campeonato de exemplo do ano anterior
    id: 'copa-fk-2024', year: 2024, name: 'Copa Force Kart 2024',
    kartodromo: 'Kartódromo Aldeia da Serra', location: 'Barueri, SP', stages: 10,
    imageUrl: '/aldeia-track.jpg', kartodromoLogoUrl: '/images/kartodromos/logo-aldeia.png',
    regulationsContent: 'Regulamento 2024...',
    categories: [
        { name: 'Graduados', ballast: '95kg', pricePerStage: 90 },
        { name: 'Sênior', ballast: '100kg', pricePerStage: 90 },
    ], description: 'Principal campeonato 2024.',
  },
];

// Mock de Eventos (adicionando ano e stageId único)
export interface EventMock extends ChampionshipEvent {
    year: number;
    stageId: string; // Identificador único da etapa, ex: 'copa-fk-2025-etapa-4'
}
export const eventsMock: EventMock[] = [
    { year: 2025, id: 'ev1', stageId: 'copa-fk-2025-etapa-4', championshipId: 'copa-fk-2025', championshipName: 'Copa FK 2025', stage: 4, date: '2025-04-12T09:00:00Z', kartodromo: 'Aldeia da Serra', status: 'Realizado' },
    { year: 2025, id: 'ev2', stageId: 'copa-fk-2025-etapa-5', championshipId: 'copa-fk-2025', championshipName: 'Copa FK 2025', stage: 5, date: '2025-05-10T09:00:00Z', kartodromo: 'Interlagos', status: 'Próximo' },
    { year: 2025, id: 'ev3', stageId: 'fk-endurance-2025-etapa-2', championshipId: 'fk-endurance-2025', championshipName: 'Endurance 2025', stage: 2, date: '2025-04-26T10:00:00Z', kartodromo: 'Granja Viana', status: 'Realizado' },
    { year: 2024, id: 'ev4', stageId: 'copa-fk-2024-etapa-10', championshipId: 'copa-fk-2024', championshipName: 'Copa FK 2024', stage: 10, date: '2024-11-15T09:00:00Z', kartodromo: 'Aldeia da Serra', status: 'Realizado' },
     { year: 2024, id: 'ev5', stageId: 'copa-fk-2024-etapa-9', championshipId: 'copa-fk-2024', championshipName: 'Copa FK 2024', stage: 9, date: '2024-10-10T09:00:00Z', kartodromo: 'Interlagos', status: 'Realizado' },
];

// Mock de Resultados da Etapa
export interface StageResult {
    stageId: string; // Link para o EventMock
    categoryName: string;
    position: number;
    pilotName: string;
    points: number;
    fastestLap?: string; // Opcional
}
export const stageResultsMock: StageResult[] = [
    // Copa FK 2025 - Etapa 4 (Realizado)
    { stageId: 'copa-fk-2025-etapa-4', categoryName: 'Graduados', position: 1, pilotName: 'Ayrton Silva', points: 25, fastestLap: '1:01.123' },
    { stageId: 'copa-fk-2025-etapa-4', categoryName: 'Graduados', position: 2, pilotName: 'Nelson Piquet', points: 18 },
    { stageId: 'copa-fk-2025-etapa-4', categoryName: 'Graduados', position: 3, pilotName: 'Emerson Fittipaldi', points: 15 },
    { stageId: 'copa-fk-2025-etapa-4', categoryName: 'Sênior', position: 1, pilotName: 'Rubens Barrichello', points: 25 },
    { stageId: 'copa-fk-2025-etapa-4', categoryName: 'Sênior', position: 2, pilotName: 'Felipe Massa', points: 18 },
    // Endurance 2025 - Etapa 2 (Realizado)
    { stageId: 'fk-endurance-2025-etapa-2', categoryName: 'Light', position: 1, pilotName: 'Equipe Alpha', points: 50 },
    { stageId: 'fk-endurance-2025-etapa-2', categoryName: 'Light', position: 2, pilotName: 'Equipe Bravo', points: 36 },
    { stageId: 'fk-endurance-2025-etapa-2', categoryName: 'Strong', position: 1, pilotName: 'Equipe Alpha', points: 50 },
    { stageId: 'fk-endurance-2025-etapa-2', categoryName: 'Strong', position: 2, pilotName: 'Equipe Bravo', points: 36 },
    // Copa FK 2024 - Etapa 10 (Realizado)
    { stageId: 'copa-fk-2024-etapa-10', categoryName: 'Graduados', position: 1, pilotName: 'Alain Prost', points: 25 },
    { stageId: 'copa-fk-2024-etapa-10', categoryName: 'Graduados', position: 2, pilotName: 'Nigel Mansell', points: 18 },
     { stageId: 'copa-fk-2024-etapa-10', categoryName: 'Sênior', position: 1, pilotName: 'Michael Schumacher', points: 25},
    // Copa FK 2024 - Etapa 9 (Realizado) - para testar 'última etapa'
     { stageId: 'copa-fk-2024-etapa-9', categoryName: 'Graduados', position: 1, pilotName: 'Nigel Mansell', points: 25 },
     { stageId: 'copa-fk-2024-etapa-9', categoryName: 'Sênior', position: 1, pilotName: 'Michael Schumacher', points: 25},

];

// Mock de Classificação do Campeonato
export interface ChampionshipStanding {
    championshipId: string; // Link para o ChampionshipMock
    categoryName: string;
    pilotName: string;
    totalPoints: number;
    position?: number; // Calcularemos depois
}
export const standingsMock: ChampionshipStanding[] = [
     // Copa FK 2025 (Parcial)
    { championshipId: 'copa-fk-2025', categoryName: 'Graduados', pilotName: 'Ayrton Silva', totalPoints: 90 },
    { championshipId: 'copa-fk-2025', categoryName: 'Graduados', pilotName: 'Nelson Piquet', totalPoints: 75 },
    { championshipId: 'copa-fk-2025', categoryName: 'Graduados', pilotName: 'Emerson Fittipaldi', totalPoints: 60 },
    { championshipId: 'copa-fk-2025', categoryName: 'Sênior', pilotName: 'Rubens Barrichello', totalPoints: 85 },
    { championshipId: 'copa-fk-2025', categoryName: 'Sênior', pilotName: 'Felipe Massa', totalPoints: 80 },
     // Endurance 2025 (Parcial)
    { championshipId: 'fk-endurance-2025', categoryName: 'Light', pilotName: 'Joao Silva', totalPoints: 80 },
    { championshipId: 'fk-endurance-2025', categoryName: 'Light', pilotName: 'Maria Bravo', totalPoints: 66 },
    { championshipId: 'fk-endurance-2025', categoryName: 'Strong', pilotName: 'Teste Silva', totalPoints: 84 },
    { championshipId: 'fk-endurance-2025', categoryName: 'Strong', pilotName: 'Maria Teste', totalPoints: 60 },
    // Copa FK 2024 (Final)
    { championshipId: 'copa-fk-2024', categoryName: 'Graduados', pilotName: 'Nigel Mansell', totalPoints: 210 },
    { championshipId: 'copa-fk-2024', categoryName: 'Graduados', pilotName: 'Alain Prost', totalPoints: 195 },
    { championshipId: 'copa-fk-2024', categoryName: 'Sênior', pilotName: 'Michael Schumacher', totalPoints: 230 },
    { championshipId: 'copa-fk-2024', categoryName: 'Sênior', pilotName: 'Mika Hakkinen', totalPoints: 180 },
];
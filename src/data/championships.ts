// src/data/championships.ts
import { Championship } from '../types';

export const championshipsData: Championship[] = [
  {
    id: 'copa-fk-2025',
    name: 'Campeonato Kart Amador Fkart Champ KGV',
    kartodromo: 'Kartódromo Granja Viana',
    location: 'São Paulo, SP',
    stages: 10,
    imageUrl: '/images/kartodromos/kgv/logo.png', // Exemplo de caminho
    kartodromoLogoUrl: '/images/kartodromos/kgv/logo.png',
    categories: [
      { name: 'Graduados', ballast: '95kg' },
      { name: 'Sênior', ballast: '100kg' },
      { name: 'Super Sênior', ballast: '105kg' },
    ],
    description: 'Inaugurado em outubro de 1996, o Kartódromo Internacional Granja Viana (KGV), em Cotia-SP, conta com uma ampla estrutura de 48 mil m2. É considerada uma das melhores pistas de kart da América do Sul, homologada com categoria “Internacional” pela Federação Internacional de Automobilismo (FIA), devido a sua infraestrutura de alto nível e aos importantes eventos que sedia.',
  },
  {
    id: 'fk-endurance-series',
    name: 'Campeonato Kart Amador FKart Principal KGV',
    kartodromo: 'Kartódromo Granja Viana',
    location: 'Cotia, SP',
    stages: 5,
    imageUrl: '/images/kartodromos/kgv/logo.png', // Exemplo de caminho
    kartodromoLogoUrl: '/images/kartodromos/kgv/logo.png',
    categories: [
      { name: 'Equipes Pro', ballast: 'Média 90kg' },
      { name: 'Equipes Light', ballast: 'Média 98kg' },
    ],
    description: 'Campeonato de longa duração focado em estratégia e trabalho em equipe.',
  },
  {
    id: 'san-marino-1',
    name: 'FKart San Marino Race',
    kartodromo: 'Kartódromo San Marino',
    location: 'Paulinia, SP',
    stages: 5,
    imageUrl: '/images/kartodromos/san-marino/logo.png', // Exemplo de caminho
    kartodromoLogoUrl: '/images/kartodromos/san-marino/logo.png',
    categories: [
      { name: 'Equipes Pro', ballast: 'Média 90kg' },
      { name: 'Equipes Light', ballast: 'Média 98kg' },
    ],
    description: 'Campeonato San Marino Race',
  },
  {
    id: 'san-marino-1',
    name: 'FKart San Marino Night',
    kartodromo: 'Kartódromo San Marino',
    location: 'Paulinia, SP',
    stages: 5,
    imageUrl: '/images/kartodromos/san-marino/logo.png', // Exemplo de caminho
    kartodromoLogoUrl: '/images/kartodromos/san-marino/logo.png',
    categories: [
      { name: 'Equipes Pro', ballast: 'Média 90kg' },
      { name: 'Equipes Light', ballast: 'Média 98kg' },
    ],
    description: 'Campeonato San Marino Night',
  },
  // Adicione mais campeonatos aqui
];

// Função auxiliar para buscar um campeonato pelo ID
export const getChampionshipById = (id: string): Championship | undefined => {
  return championshipsData.find(champ => champ.id === id);
}
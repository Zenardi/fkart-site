// src/data/championships.ts
import { Championship } from '../types';

export const championshipsData: Championship[] = [
  {
    id: 'copa-fk-2025',
    name: 'Campeonato Kart Amador Fkart Champ KGV',
    kartodromo: 'Kartódromo Internacional Granja Viana – São Paulo/SP (kart outdoor/rental kart)',
    location: 'São Paulo, SP',
    stages: 10,
    imageUrl: '../assets/images/kgv/pista-panoramica.png', // Exemplo de caminho
    categories: [
      { name: 'Graduados', ballast: '95kg' },
      { name: 'Sênior', ballast: '100kg' },
      { name: 'Super Sênior', ballast: '105kg' },
    ],
    description: 'Inaugurado em outubro de 1996, o Kartódromo Internacional Granja Viana (KGV), em Cotia-SP, conta com uma ampla estrutura de 48 mil m2. É considerada uma das melhores pistas de kart da América do Sul, homologada com categoria “Internacional” pela Federação Internacional de Automobilismo (FIA), devido a sua infraestrutura de alto nível e aos importantes eventos que sedia.',
  },
  {
    id: 'fk-endurance-series',
    name: 'FK Endurance Series 2025',
    kartodromo: 'Kartódromo Granja Viana',
    location: 'Cotia, SP',
    stages: 5,
    imageUrl: '../assets/images/kgv/pista-panoramica.png', // Exemplo de caminho
    categories: [
      { name: 'Equipes Pro', ballast: 'Média 90kg/piloto' },
      { name: 'Equipes Light', ballast: 'Média 98kg/piloto' },
    ],
    description: 'Campeonato de longa duração focado em estratégia e trabalho em equipe.',
  },
  // Adicione mais campeonatos aqui
];

// Função auxiliar para buscar um campeonato pelo ID
export const getChampionshipById = (id: string): Championship | undefined => {
  return championshipsData.find(champ => champ.id === id);
}
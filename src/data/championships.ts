// src/data/championships.ts
import { Championship } from '../types';

// Exemplo de como ficaria (substitua pelo texto real)
const regulamentoCopaFK2025 = `REGULAMENTO OFICIAL - COPA FORCE KART 2025

**Artigo 1 – DISPOSIÇÕES GERAIS**

1.1. A Copa Force Kart 2025 é um campeonato de kart amador (rental kart) organizado pela Fkart - Force Kart Racing.
1.2. Todos os participantes, ao se inscreverem, declaram ter lido e concordado com todos os termos deste regulamento.
1.3. A organização se reserva o direito de alterar este regulamento a qualquer momento, visando a melhoria do evento, com prévia comunicação aos participantes.

**Artigo 2 – CATEGORIAS E LASTRO**

2.1. O campeonato será disputado nas categorias: Graduados (Lastro 95kg), Sênior (Lastro 100kg) e Super Sênior (Lastro 105kg).
2.2. A pesagem será realizada com o piloto vestindo todo o equipamento (macacão, capacete, etc.). O lastro adicional deve ser fornecido pelo kartódromo ou pelo piloto, e fixado de forma segura no kart.

**Artigo 3 – FORMATO DAS ETAPAS**

3.1. Cada etapa consistirá em: Tomada de Tempo (10 minutos) e Corrida (20 minutos + 1 volta).
3.2. O grid de largada será definido pela ordem da tomada de tempo.

**(CONTINUA... Cole o restante do regulamento aqui, usando \n\n entre parágrafos)**
`;

const regulamentoEnduranceFK2025 = `REGULAMENTO OFICIAL - FK ENDURANCE SERIES 2025

**Seção 1 - Visão Geral**

1.1. O FK Endurance Series é um campeonato de kart amador de longa duração, disputado por equipes.
1.2. O espírito de equipe, estratégia e resistência são fundamentais.

**Seção 2 - Formato das Provas**

2.1. As provas terão duração variável (consultar calendário), com paradas obrigatórias para troca de pilotos e karts.
2.2. A largada será no estilo "Le Mans".

**(CONTINUA... Cole o restante do regulamento aqui, usando \n\n entre parágrafos)**
`;



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
    regulationsContent: regulamentoCopaFK2025,
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
      { name: 'Categoria Pro', ballast: 'Média 90kg', pricePerStage: 100 },
      { name: 'Categoria Light', ballast: 'Média 98kg', pricePerStage: 100 },
    ],
    regulationsContent: regulamentoEnduranceFK2025,
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
      { name: 'Categoria Pro', ballast: 'Média 90kg', pricePerStage: 100 },
      { name: 'Categoria Light', ballast: 'Média 98kg', pricePerStage: 100 },
    ],
    regulationsContent: regulamentoEnduranceFK2025,
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
      { name: 'Categoria Pro', ballast: 'Média 90kg', pricePerStage: 100 },
      { name: 'Categoria Light', ballast: 'Média 98kg', pricePerStage: 100 },
    ],
    regulationsContent: regulamentoEnduranceFK2025,
    description: 'Campeonato San Marino Night',
  },
  // Adicione mais campeonatos aqui
];

// Função auxiliar para buscar um campeonato pelo ID
export const getChampionshipById = (id: string): Championship | undefined => {
  return championshipsData.find(champ => champ.id === id);
}
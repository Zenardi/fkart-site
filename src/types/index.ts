// src/types/index.ts
export interface Category {
    name: string;
    ballast: string; // Ex: "95kg", "100kg + 5kg tolerância"
  }
  
  export interface Championship {
    id: string; // Identificador único para URL (ex: 'copa-force-kart-2025')
    name: string; // Nome completo do campeonato
    kartodromo: string; // Nome do kartódromo
    location: string; // Cidade/Estado do kartódromo
    stages: number; // Quantidade de etapas
    imageUrl?: string; // Opcional: URL de uma imagem para o campeonato
    categories: Category[];
    description?: string; // Opcional: Uma breve descrição
  }

  export type EventStatus = 'Próximo' | 'Realizado' | 'Cancelado' | 'Adiado';

  export interface ChampionshipEvent {
    id: string; // ID único para o evento (ex: 'copa-fk-2025-etapa-1')
    championshipId: string; // ID do campeonato pai (ex: 'copa-fk-2025')
    championshipName: string; // Nome do campeonato (para exibição fácil)
    stage: number | string; // Número da etapa (ex: 1) ou nome especial (ex: "Qualifying Day")
    date: string; // Data no formato ISO 8601 -> "YYYY-MM-DD" ou "YYYY-MM-DDTHH:mm:ssZ"
    kartodromo: string; // Local específico da etapa
    status: EventStatus; // Status do evento
    notes?: string; // Notas adicionais (opcional)
  }
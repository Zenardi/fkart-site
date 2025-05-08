// src/types/index.ts
export interface Category {
    name: string;
    ballast: string; // Ex: "95kg", "100kg + 5kg tolerância"
    pricePerStage?: number;
  }
  
  export interface Championship {
    id: string; // Identificador único para URL (ex: 'copa-force-kart-2025')
    name: string; // Nome completo do campeonato
    kartodromo: string; // Nome do kartódromo
    location: string; // Cidade/Estado do kartódromo
    stages: number; // Quantidade de etapas
    imageUrl?: string; // Opcional: URL de uma imagem para o campeonato
    kartodromoLogoUrl?: string;
    categories: Category[];
    description?: string; // Opcional: Uma breve descrição
    regulationsContent?: string;
  }

  export type EventStatus = 'Próximo' | 'Realizado' | 'Cancelado' | 'Adiado';

  export interface ChampionshipEvent {
    id: string; // ID único para o evento (ex: 'copa-fk-2025-etapa-1')
    championshipId: string; // ID do campeonato pai (ex: 'copa-fk-2025')
    championshipName: string; // Nome do campeonato (para exibição fácil)
    stage: number | string; // Número da etapa (ex: 1) ou nome especial (ex: "Qualifying Day")
    date: string; // Data no formato ISO 8601 -> "YYYY-MM-DD" ou "YYYY-MM-DDTHH:mm:ssZ"
    kartodromo: string; // Local específico da etapa
    status?: EventStatus; // Status do evento
    notes?: string; // Notas adicionais (opcional)
  }

// --- Tipos Auxiliares ---

/** Status possíveis para o pagamento de uma inscrição */
export type PaymentStatus = 'Pendente' | 'Pago' | 'Isento' | 'Atrasado';

// --- Interfaces das Entidades ---

/**
 * Representa um Kartódromo onde ocorrem os eventos.
 */
export interface KartTrack {
  id: string; // Identificador único (ex: 'interlagos', 'kgv')
  name: string; // Nome completo (ex: "Kartódromo Internacional de Interlagos")
  location: string; // Cidade/Estado (ex: "São Paulo, SP")
  logoUrl?: string; // Opcional: Caminho para o logo (ex: /images/kartodromos/logo-interlagos.png)
  website?: string; // Opcional: URL do site oficial do kartódromo
  address?: string; // Opcional: Endereço completo
  mapUrl?: string; // Opcional: Link para o Google Maps ou similar
}

/**
 * Representa uma categoria dentro de um campeonato (ex: Graduados, Sênior).
 * (Atualizada com base na definição anterior)
 */
export interface Category {
  id: string; // Identificador único da categoria (ex: 'graduados-2025', 'senior')
  name: string; // Nome da categoria (ex: "Graduados")
  ballast: string; // Descrição do lastro (ex: "95kg", "Média 90kg/piloto")
  pricePerStage?: number; // Opcional: Preço por etapa para esta categoria
  description?: string; // Opcional: Breve descrição da categoria
  // Poderia ter: minAge, maxAge, etc.
}

/**
 * Representa um campeonato específico em uma determinada temporada/ano.
 * (Atualizada com base na definição anterior)
 */
export interface Championship {
  id: string; // Identificador único do campeonato (ex: 'copa-fk-2025')
  year: number; // Ano/Temporada do campeonato
  name: string; // Nome completo (ex: "Copa Force Kart 2025")
  description?: string; // Opcional: Descrição do campeonato
  imageUrl?: string; // Opcional: Imagem principal do campeonato (ex: /pista-interlagos.jpg)

  // Informações do Kartódromo Principal (pode ser redundante se usar kartTrackId)
  kartodromo: string; // Nome do kartódromo principal
  location: string; // Localização do kartódromo principal
  kartodromoLogoUrl?: string; // Opcional: Logo do kartódromo principal

  // Referência opcional ao Kartódromo principal (design mais normalizado)
  // kartTrackId?: string; // ID que referencia um objeto KartTrack

  stages: number; // Número total de etapas planejadas
  categories: Category[]; // Array com as categorias *deste* campeonato (embutido)
  // Alternativa (design mais normalizado): categoryIds: string[];

  regulationsContent?: string; // Conteúdo do regulamento em texto/markdown
  // Alternativa: regulationsUrl?: string; // Link para PDF
}

/**
 * Representa um piloto participante.
 */
export interface Driver {
  id: string; // Identificador único do piloto (pode ser CPF, ID interno, etc.)
  name: string; // Nome completo
  nickname?: string; // Opcional: Apelido
  email: string; // Email (importante para contato)
  phone?: string; // Opcional: Telefone
  birthDate?: string; // Opcional: Data de nascimento (formato "YYYY-MM-DD")
  city?: string; // Opcional: Cidade
  state?: string; // Opcional: Estado
  profileImageUrl?: string; // Opcional: URL para foto de perfil
  registrationDate: string; // Data de cadastro no sistema (formato ISO)
  // Poderia ter: emergencyContactName, emergencyContactPhone, etc.
}

/**
 * Representa uma etapa específica (evento) de um campeonato.
 * (Atualizada com base na definição anterior de ChampionshipEvent)
 */
export interface Stage {
  id: string; // Identificador único da etapa (ex: 'copa-fk-2025-etapa-5')
  championshipId: string; // ID do campeonato pai
  championshipName?: string; // Nome do campeonato (denormalizado para exibição fácil)
  year: number; // Ano da etapa
  stageNumber: number | string; // Número da etapa (ex: 5) ou nome (ex: "Final")
  name?: string; // Opcional: Nome específico da etapa (ex: "GP de Interlagos")
  date: string; // Data e hora da etapa (formato ISO: "YYYY-MM-DDTHH:mm:ssZ")
  kartodromo: string; // Nome do Kartódromo onde ocorre esta etapa
  // kartTrackId?: string; // ID que referencia um objeto KartTrack (design mais normalizado)
  status?: EventStatus; // Status: 'Próximo', 'Realizado', 'Cancelado', 'Adiado'
  notes?: string; // Opcional: Observações sobre a etapa
}

// A interface ProcessedStage ainda deve ter status obrigatório,
// pois ele será calculado antes da renderização.
export interface ProcessedStage extends Stage {
  dateObject: Date;
  status: EventStatus; // <--- Status aqui é obrigatório (calculado ou vindo dos dados)
}

/**
 * Representa a inscrição de um piloto em uma categoria de um campeonato.
 */
export interface DriverRegistration {
  id: string; // Identificador único da inscrição
  driverId: string; // ID do piloto (referencia Driver)
  championshipId: string; // ID do campeonato (referencia Championship)
  categoryId: string; // ID da categoria (referencia Category)
  year: number; // Ano da temporada da inscrição
  kartNumber?: string; // Opcional: Número do kart escolhido/designado
  registrationDate: string; // Data da inscrição (formato ISO)
  paymentStatus: PaymentStatus; // Status do pagamento
  paymentDate?: string; // Opcional: Data do pagamento (formato ISO)
  notes?: string; // Opcional: Observações sobre a inscrição
}

/**
 * Representa o resultado de um piloto em uma categoria específica de uma etapa.
 */
export interface RaceResult {
  id: string; // Identificador único do resultado
  stageId: string; // ID da etapa (referencia Stage)
  driverId: string; // ID do piloto (referencia Driver)
  categoryId: string; // ID da categoria (referencia Category)
  kartNumberUsed?: string; // Opcional: Número do kart usado na corrida
  gridPosition?: number; // Opcional: Posição de largada
  finishPosition: number; // Posição final na corrida
  points: number; // Pontos conquistados na etapa
  fastestLapTime?: string; // Opcional: Tempo da volta mais rápida (ex: "1:01.123")
  isFastestLap?: boolean; // Opcional: Indica se fez a volta mais rápida (para ponto extra)
  penaltyPoints?: number; // Opcional: Pontos de penalidade recebidos
  disqualified: boolean; // Indica se foi desqualificado
  reasonForDQ?: string; // Opcional: Motivo da desqualificação
  notes?: string; // Opcional: Observações sobre o resultado
}

/**
 * (Poderia ser adicionado) Representa a classificação geral de um piloto em um campeonato/categoria.
 */
export interface ChampionshipStanding {
    id: string; // ID único da linha de classificação
    championshipId: string;
    categoryId: string;
    driverId: string;
    driverName: string; // Denormalizado para exibição
    totalPoints: number;
    position?: number; // Posição no ranking (calculada)
    racesCompleted?: number; // Número de corridas que pontuou
    victories?: number; // Número de vitórias
    podiums?: number; // Número de pódios
}

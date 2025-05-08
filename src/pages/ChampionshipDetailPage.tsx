// src/pages/ChampionshipDetailPage.tsx (Corrigido)
import React, { useMemo } from "react"; // Import useMemo
import { useParams, Link } from "react-router-dom";
import { getChampionshipById } from "../data/championships";
import { eventsData } from "../data/events"; // <-- 1. Importar dados dos eventos
import { ChampionshipEvent } from "../types"; // <-- 1. Importar tipo do evento
import {
  Typography,
  Card,
  CardBody,
  Button,
  Chip,
} from "@material-tailwind/react";
import { format, parseISO } from "date-fns"; // <-- 2. Importar date-fns
import { ptBR } from "date-fns/locale"; // <-- 2. Importar locale ptBR
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const getStatusColor = (
  status: ChampionshipEvent["status"]
): any /* Ajuste o tipo se souber os tipos exatos do Chip */ => {
  switch (status) {
    case "Próximo":
      return "blue";
    case "Realizado":
      return "green";
    case "Cancelado":
      return "red";
    case "Adiado":
      return "amber";
    default:
      return "blue-gray";
  }
};

const ChampionshipDetailPage: React.FC = () => {
  const { championshipId } = useParams<{ championshipId: string }>();
  const championship = championshipId
    ? getChampionshipById(championshipId)
    : undefined;

  // 3. Filtrar e ordenar eventos para este campeonato usando useMemo
  const championshipEvents = useMemo(() => {
    if (!championshipId) return []; // Retorna array vazio se não houver ID
    // Filtra os eventos pelo ID do campeonato atual
    return (
      eventsData
        .filter((event) => event.championshipId === championshipId)
        // Ordena os eventos encontrados pela data (mais antiga primeiro)
        .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime())
    );
  }, [championshipId]); // Dependência: recalcular apenas se championshipId mudar

  // Se o campeonato não for encontrado, mostra mensagem
  if (!championship) {
    return (
      <div className="text-center">
        <Typography
          as="h4"
          variant="h4"
          color="red"
          className="mb-4"
          placeholder={undefined}
        >
          Campeonato não encontrado!
        </Typography>
        <Link to="/campeonatos">
          <Button color="blue-gray" placeholder={undefined}>
            Voltar para a lista
          </Button>
        </Link>
      </div>
    );
  }

  // Função helper para formatar moeda
  const formatCurrency = (value: number): string => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  // Renderiza a página se o campeonato for encontrado
  return (
    <div>
      {/* Link Voltar */}
      <Link to="/campeonatos" className="mb-6 inline-block">
        <Button
          variant="text"
          className="flex items-center gap-2"
          placeholder={undefined}
        >
          {/* Ícone de voltar SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Voltar para Campeonatos
        </Button>
      </Link>

      {/* Título do Campeonato */}
      <Typography
        as="h2"
        variant="h2"
        color="blue-gray"
        placeholder={undefined}
        className="mb-2"
      >
        {championship.name}
      </Typography>

      {/* Imagem do Campeonato (se houver) */}
      {championship.imageUrl && (
        <img
          // Assumindo que a imagem está na pasta 'public' como discutido antes
          src={
            championship.imageUrl.startsWith("/")
              ? championship.imageUrl
              : `/${championship.imageUrl}`
          }
          alt={`Imagem ${championship.name}`}
          className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md my-4"
        />
      )}

      {/* Card: Detalhes Gerais */}
      <Card className="mb-6" placeholder={undefined}>
        <CardBody placeholder={undefined}>
          <Typography
            as="h5"
            variant="h5"
            color="blue-gray"
            placeholder={undefined}
            className="mb-3 font-semibold"
          >
            Detalhes
          </Typography>
          <div className="space-y-2">
            <Typography placeholder={undefined}>
              <span className="font-semibold">Local Principal:</span>{" "}
              {championship.kartodromo} ({championship.location})
            </Typography>
            <Typography placeholder={undefined}>
              <span className="font-semibold">Número de Etapas:</span>{" "}
              {championship.stages}
            </Typography>
            {championship.description && (
              <Typography placeholder={undefined}>
                <span className="font-semibold">Descrição:</span>{" "}
                {championship.description}
              </Typography>
            )}
            <Typography placeholder={undefined}>
              <span className="font-semibold">Inscricao no Campeonato:</span>{" "}
              R$ {championship.entryPrice}
            </Typography>
          </div>
        </CardBody>
      </Card>

      {/* Card: Categorias e Lastro */}
      <Card className="mb-6" placeholder={undefined}>
        <CardBody placeholder={undefined}>
          <Typography
            as="h5"
            variant="h5"
            color="blue-gray"
            placeholder={undefined}
            className="mb-4 font-semibold border-b pb-2"
          >
            {" "}
            {/* Título ajustado */}
            Categorias, Lastro e Valores
          </Typography>
          <div className="space-y-4">
            {championship.categories.map((category, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                {" "}
                {/* Estilo do item */}
                {/* Nome da Categoria */}
                <Typography
                  color="blue-gray"
                  placeholder={undefined}
                  className="font-semibold text-lg mb-2"
                >
                  {category.name}
                </Typography>
                {/* Chips para Lastro e Preço */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {/* Lastro */}
                  <Chip
                    variant="outlined" // Estilo diferente para destacar
                    color="blue-gray"
                    size="sm"
                    value={`Lastro: ${category.ballast}`}
                    className="whitespace-nowrap border-blue-gray-200" // Borda sutil
                  />
                  {/* Preço (condicional) */}
                  {category.pricePerStage !== undefined && (
                    <Chip
                      variant="outlined" // Estilo diferente
                      color="green" // Cor para preço
                      size="sm"
                      // Usa a função formatCurrency
                      value={`Valor: ${formatCurrency(
                        category.pricePerStage
                      )} / etapa`}
                      className="whitespace-nowrap border-green-300" // Borda sutil
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Texto sobre Convidados */}
          <Typography
            placeholder={undefined}
            variant="paragraph"
            color="gray"
            className="mt-5 pt-4 border-t border-gray-200 text-sm"
          >
            <strong className="font-semibold text-blue-gray-700">
              Participação Avulsa (Convidado):
            </strong>{" "}
            É possível correr em etapas individuais como "Convidado", sem
            participar da pontuação geral do campeonato. A participação está
            sujeita à disponibilidade de vagas e ao pagamento da taxa da etapa.
            Entre em contato com a organização para mais detalhes.
          </Typography>
        </CardBody>
      </Card>

      {/* 4. NOVA SEÇÃO: Calendário do Campeonato */}
      {championshipEvents.length > 0 && ( // Renderiza a seção apenas se houver eventos para este campeonato
        <Card placeholder={undefined} className="mb-6">
          {" "}
          {/* Adiciona margem inferior */}
          <CardBody placeholder={undefined}>
            <Typography
              as="h5"
              variant="h5"
              color="blue-gray"
              placeholder={undefined}
              className="mb-4 font-semibold"
            >
              Etapas Agendadas
            </Typography>
            <div className="space-y-4">
              {" "}
              {/* Espaçamento entre os itens da lista */}
              {/* 5. Mapeia e Renderiza cada evento */}
              {championshipEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex flex-col sm:flex-row justify-between items-start p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  {/* Coluna Esquerda: Etapa e Data */}
                  <div className="mb-3 sm:mb-0 sm:mr-4">
                    <Typography
                      as="p"
                      variant="h6"
                      color="blue-gray"
                      placeholder={undefined}
                      className="font-medium"
                    >
                      Etapa {event.stage}
                    </Typography>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                      {/* Ícone Calendário */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 flex-shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                        />
                      </svg>
                      <Typography
                        as="span"
                        placeholder={undefined}
                        className="text-xs"
                      >
                        {/* Formata a data completa */}
                        {format(
                          parseISO(event.date),
                          "dd/MM/yyyy 'às' HH:mm'h'",
                          { locale: ptBR }
                        )}
                      </Typography>
                    </div>
                  </div>
                  {/* Coluna Direita: Local e Status */}
                  <div className="flex flex-col items-start sm:items-end w-full sm:w-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      {/* Ícone Localização */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 flex-shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                      <Typography
                        as="span"
                        placeholder={undefined}
                        className="text-xs text-right"
                      >
                        {event.kartodromo}
                      </Typography>
                    </div>
                    {/* Chip de Status */}
                    <Chip
                      size="sm"
                      variant="ghost"
                      value={event.status}
                      color={getStatusColor(event.status)}
                      className="capitalize"
                    />
                    {/* Notas do evento (se houver) */}
                    {event.notes && (
                      <Typography
                        variant="small"
                        color="blue-gray"
                        placeholder={undefined}
                        className="mt-2 pt-2 border-t border-gray-200/50 text-xs italic text-right w-full"
                      >
                        Nota: {event.notes}
                      </Typography>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      )}

      {/* --- SEÇÃO REGULAMENTO (MODIFICADA PARA MARKDOWN) --- */}
      {championship.regulationsContent && (
        <Card placeholder={undefined} className="mb-6">
          <CardBody placeholder={undefined}>
            <Typography
              as="h5"
              variant="h5"
              color="blue-gray"
              placeholder={undefined}
              className="mb-3 font-semibold border-b pb-2"
            >
              Regulamento Oficial
            </Typography>

            {/* 2. Usar ReactMarkdown dentro de um div com classes 'prose' */}
            <div className="prose prose-sm sm:prose-base max-w-none mt-4">
              {/*
                               'prose': Classe base do plugin @tailwindcss/typography
                               'prose-sm sm:prose-base': Define tamanhos de fonte responsivos
                               'max-w-none': Remove o limite de largura padrão do prose, útil dentro de um CardBody
                            */}
              <ReactMarkdown
                remarkPlugins={[remarkGfm]} // Habilita tabelas, etc (opcional)
              >
                {championship.regulationsContent}
              </ReactMarkdown>
            </div>
          </CardBody>
        </Card>
      )}
      {/* --- FIM SEÇÃO REGULAMENTO --- */}

      {/* Outras Seções futuras (Resultados, Regulamento, etc.) podem vir aqui */}
    </div>
  );
};

export default ChampionshipDetailPage;

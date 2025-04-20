// src/pages/ChampionshipsListPage.tsx (Corrigido)
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { championshipsData } from "../data/championships";
import { Championship } from "../types";
import kgvPistaImage from "../assets/images/kgv/pista-panoramica.png";
import sanMarinoPistaImage from "../assets/images/san-marino/pista-panoramica.png";
import kgvLogo from "../assets/images/kgv/kgv-logo.png";

// Componente reutilizável para o card do campeonato
const ChampionshipCard: React.FC<{ championship: Championship }> = ({
  championship,
}) => {
  let imageToDisplay: string;

  // --- 2. Lógica para decidir qual imagem usar ---
  // Verifique se este é o campeonato específico (ajuste o ID se necessário)
  if (championship.kartodromo === "Kartódromo Granja Viana") {
    // Ou use championship.id === 'id_do_campeonato_kgv'
    imageToDisplay = kgvPistaImage;
  } else if (championship.kartodromo === "Kartódromo San Marino") {
    imageToDisplay = sanMarinoPistaImage;
  } else if (championship.imageUrl) {
    // Se não for o KGV mas tiver imageUrl, usa ela (assumindo que está na pasta /public)
    imageToDisplay = championship.imageUrl.startsWith("/")
      ? championship.imageUrl
      : `/${championship.imageUrl}`;
  } else {
    // Se não for KGV e não tiver imageUrl, usa um placeholder
    imageToDisplay = "https://via.placeholder.com/400x200?text=Sem+Imagem";
  }

  return (
    <Card
      className="mt-6 w-full md:w-96 hover:shadow-lg transition-shadow duration-300"
      placeholder={undefined}
    >
      <CardHeader
        color="blue-gray"
        className="relative h-56"
        placeholder={undefined}
      >
        <img
          src={imageToDisplay} // <-- Usa a variável com a imagem correta
          alt={`Imagem ${championship.name}`}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody placeholder={undefined}>
        {/* ... conteúdo do card body ... */}
        <Typography
          as="h5"
          variant="h5"
          color="blue-gray"
          placeholder={undefined}
          className="mb-2"
        >
          {championship.name}
        </Typography>
        {/* --- MODIFICAÇÃO PARA EXIBIR LOGO --- */}
        <div className="flex items-center mb-1 text-sm text-gray-700">
          {/* Ícone de Localização (opcional) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mr-1 flex-shrink-0"
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

          {/* Renderiza o logo SE ele existir nos dados */}
          {championship.kartodromoLogoUrl && (
            <img
              src={championship.kartodromoLogoUrl} // Caminho da pasta /public
              alt={`Logo ${championship.kartodromo}`}
              // Ajuste o tamanho conforme necessário (altura ou largura)
              className="h-4 w-auto mr-2 object-contain" // Ex: h-4 (16px), margem direita
            />
          )}
          {/* Nome do Kartódromo e Localização */}
          <Typography as="span" placeholder={undefined} className="flex-1">
            {championship.kartodromo} ({championship.location})
          </Typography>
        </div>
        {/* --- FIM DA MODIFICAÇÃO --- */}
        {/* ... */}
      </CardBody>
      <CardFooter className="pt-0" placeholder={undefined}>
        {/* ... conteúdo do card footer ... */}
        <Link to={`/campeonatos/${championship.id}`}>
          <Button placeholder={undefined}>Ver Detalhes</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const ChampionshipsListPage: React.FC = () => {
  return (
    <div>
      {/* Erro corrigido: Adicionado as="h2" e placeholder */}
      <Typography
        as="h2"
        variant="h2"
        color="blue-gray"
        className="mb-6"
        placeholder={undefined}
      >
        Nossos Campeonatos
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {championshipsData.map((champ) => (
          <ChampionshipCard key={champ.id} championship={champ} />
        ))}
      </div>
    </div>
  );
};

export default ChampionshipsListPage;

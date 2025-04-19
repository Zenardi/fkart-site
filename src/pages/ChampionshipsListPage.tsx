// src/pages/ChampionshipsListPage.tsx (Corrigido)
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';
import { championshipsData } from '../data/championships';
import { Championship } from '../types';

// Componente reutilizável para o card do campeonato
const ChampionshipCard: React.FC<{ championship: Championship }> = ({ championship }) => {
  return (
    // Erro corrigido: Adicionado placeholder
    <Card className="mt-6 w-full md:w-96 hover:shadow-lg transition-shadow duration-300" placeholder={undefined}>
      {/* Erro corrigido: Adicionado placeholder */}
      <CardHeader color="blue-gray" className="relative h-56" placeholder={undefined}>
        <img
          src={championship.imageUrl || "https://via.placeholder.com/400x200?text=Sem+Imagem"}
          alt={`Imagem ${championship.name}`}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      {/* Erro corrigido: Adicionado placeholder */}
      <CardBody placeholder={undefined}>
        {/* Erro corrigido: Adicionado as="h5" e placeholder */}
        <Typography as="h5" variant="h5" color="blue-gray" className="mb-2" placeholder={undefined}>
          {championship.name}
        </Typography>
        {/* Erro corrigido: Adicionado placeholder */}
        <Typography placeholder={undefined}>
          Local: {championship.kartodromo} ({championship.location})
        </Typography>
        {/* Erro corrigido: Adicionado placeholder */}
        <Typography placeholder={undefined}>
          Etapas: {championship.stages}
        </Typography>
        {/* Erro corrigido: Adicionado placeholder */}
        <Typography className="mt-2 text-sm text-gray-600" placeholder={undefined}>
          {championship.description}
        </Typography>
      </CardBody>
      {/* Erro corrigido: Adicionado placeholder */}
      <CardFooter className="pt-0" placeholder={undefined}>
        <Link to={`/campeonatos/${championship.id}`}>
          {/* Erro corrigido: Adicionado placeholder */}
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
      <Typography as="h2" variant="h2" color="blue-gray" className="mb-6" placeholder={undefined}>
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
// src/pages/HomePage.tsx (Corrigido)
import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import imgTrofeus from "../assets/images/trofeus-old.png";

const HomePage: React.FC = () => {
  return (
    <div className="text-center py-16">
      {/* Use a prop 'as' para definir a tag HTML e adicione placeholder={undefined} */}
      <Typography
        as="h1" // Define a tag HTML semanticamente correta
        variant="h1"
        color="blue-gray"
        className="mb-4"
        placeholder={undefined} // Adicionado para satisfazer o erro TS2741
      >
        Bem-vindo ao Force Kart Racing!
      </Typography>

      {/* Use a prop 'as' para definir a tag HTML e adicione placeholder={undefined} */}
      <Typography
        as="h5" // Define a tag HTML semanticamente correta
        variant="h5"
        color="gray"
        className="mb-8 font-normal"
        placeholder={undefined} // Adicionado para satisfazer o erro TS2741
      >
        Sua paixão pela velocidade começa aqui. Explore nossos campeonatos e
        junte-se a nós! A Force Kart Racing é um time de pilotos apaixonados
        pelo automobilismo, que ao longo de dez anos vivenciam o mundo do
        kartismo. Com a experiência da FKR e a sua vontade de ser campeão, todos
        saem ganhando.
      </Typography>

      <div className="flex justify-center gap-4">
        <Link to="/campeonatos">
          {/* Adicione placeholder={undefined} para satisfazer o erro TS2741 */}
          <Button placeholder={undefined}>Ver Campeonatos</Button>
        </Link>
        {/* Se adicionar outros botões, lembre-se do placeholder={undefined} */}
        {/* Exemplo:
        <Button variant="outlined" placeholder={undefined}>
          Saiba Mais
        </Button>
        */}
      </div>

      {/* Adicione mais seções: Sobre nós, Últimas notícias, Galeria, etc. */}

      <div className="flex justify-center gap-4 py-16">
        <section>
          <img
            className="h-96 w-full object-cover object-center"
            src={imgTrofeus}
            alt="nature image"
          />
        </section>
      </div>

    </div>
  );
};

export default HomePage;

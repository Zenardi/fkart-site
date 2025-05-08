// src/pages/HomePage.tsx (Corrigido)
import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Carousel,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  FaBeer,
  FaTrophy,
  FaMapMarkedAlt,
  FaUsers,
  FaStar,
  FaFlagCheckered,
} from "react-icons/fa";
import carouselImg1 from "../assets/images/carousel-home/trofeus1.jpg";
import carouselImg2 from "../assets/images/carousel-home/trofeus2.jpg";
import carouselImg3 from "../assets/images/carousel-home/karts-sm.jpg";
import carouselImg4 from "../assets/images/carousel-home/sm-kart-01.jpg";
import carouselImg5 from "../assets/images/carousel-home/sm-fark-02.jpg";
import { championshipsData } from "../data/championships";

const HomePage: React.FC = () => {
  return (
    <div className="text-center py-8">
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

      {/* --- 3. Adicionando o Carrossel --- */}
      <div className="mt-8 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
        {" "}
        {/* Padding lateral para telas maiores */}
        <Carousel
          className="rounded-xl overflow-hidden shadow-xl" // Borda arredondada e sombra
          autoplay={true} // Autoplay habilitado
          autoplayDelay={4000} // Intervalo de 4 segundos
          loop={true} // Loop infinito
          placeholder={undefined} // Prop necessária
          transition={{ type: "tween", duration: 0.8 }} // Transição mais suave
          // --- Setas de Navegação (Opcional - Customizadas) ---
          prevArrow={({ handlePrev }) => (
            <IconButton
              placeholder={undefined}
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 bg-black/30 hover:bg-black/50 rounded-full" // Estilo customizado
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              placeholder={undefined}
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-black/30 hover:bg-black/50 rounded-full" // Estilo customizado
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          // --- Navegação por Pontos (Opcional) ---
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1.5 cursor-pointer rounded-full transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {/* Imagens dentro do Carrossel */}
          <img
            src={carouselImg1} // Variável importada
            alt="Imagem do Carrossel 1"
            className="h-[500px] w-full object-cover" // Altura fixa e cover para preencher
          />
          <img
            src={carouselImg2} // Variável importada
            alt="Imagem do Carrossel 2"
            className="h-[500px] w-full object-cover"
          />
          <img
            src={carouselImg3} // Variável importada
            alt="Imagem do Carrossel 3"
            className="h-[500px] w-full object-cover"
          />
          <img
            src={carouselImg4} // Variável importada
            alt="Imagem do Carrossel 3"
            className="h-[500px] w-full object-cover"
          />
          <img
            src={carouselImg5} // Variável importada
            alt="Imagem do Carrossel 3"
            className="h-[500px] w-full object-cover"
          />
        </Carousel>
      </div>
      {/* --- Fim do Carrossel --- */}
      {/* --- NOVA SEÇÃO: TIPOS DE CAMPEONATOS --- */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-gray-50 px-4">
                <div className="container mx-auto">
                    <Typography
                        as="h2"
                        variant="h2"
                        color="blue-gray"
                        placeholder={undefined}
                        className="text-center mb-5 font-bold"
                    >
                        {/* Título Atualizado */}
                        CAMPEONATOS FKART {new Date().getFullYear()}
                    </Typography>
                    {/* Texto Introdutório Atualizado */}
                    <Typography color="gray" placeholder={undefined} className="text-center mb-16 text-lg max-w-3xl mx-auto">
                        Seja você um iniciante ou piloto experiente, temos o campeonato certo! Explore nossas competições atuais e encontre a sua turma para acelerar.
                    </Typography>

                    {/* Grid para os cards dos CAMPEONATOS REAIS */}
                    {championshipsData.length > 0 ? (
                        // 2. Grid que agora mapeia os dados importados
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"> {/* Ajustei para xl:grid-cols-4, ajuste conforme o número de campeonatos */}
                            {championshipsData.map((champ) => (
                                <Card
                                    key={champ.id} // Chave única para o map
                                    shadow={true}
                                    className="border border-gray-200 flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out" // Efeito hover + flex
                                    placeholder={undefined}
                                >
                                    {/* Opcional: Imagem no topo do Card */}
                                    {champ.imageUrl && (
                                        <img
                                            src={champ.imageUrl}
                                            alt={`Imagem ${champ.name}`}
                                            className="h-40 w-full object-cover rounded-t-lg" // Imagem com altura fixa
                                        />
                                    )}
                                    <CardBody className="text-center p-6 flex-grow flex flex-col" placeholder={undefined}> {/* flex-grow para ocupar espaço, flex-col para alinhar botão */}
                                        {/* Ícone (usando um genérico aqui) */}
                                        <FaFlagCheckered className="w-10 h-10 text-red-600 mx-auto mb-4" />
                                        {/* Nome do Campeonato */}
                                        <Typography as="h5" variant="h5" color="blue-gray" placeholder={undefined} className="mb-2 font-semibold">
                                            {champ.name}
                                        </Typography>
                                        {/* Descrição Curta ou Detalhes */}
                                        <Typography placeholder={undefined} className="text-sm font-normal text-gray-600 mb-4 flex-grow"> {/* flex-grow para empurrar botão */}
                                            {/* Usa a descrição do objeto, ou cria uma padrão */}
                                            {champ.description || `${champ.stages} Etapas • ${champ.kartodromo}`}
                                        </Typography>
                                        {/* Botão Detalhes */}
                                        <div className="mt-auto pt-4"> {/* Empurra botão para baixo */}
                                            <Link to={`/campeonatos/${champ.id}`}>
                                                <Button size="sm" variant="gradient" color="gray" fullWidth placeholder={undefined}>
                                                    Ver Detalhes
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        // Mensagem caso não haja campeonatos nos dados
                        <Typography color="gray" placeholder={undefined} className="text-center">
                            Nenhum campeonato cadastrado no momento.
                        </Typography>
                    )}
                </div> {/* Fim do container */}
            </section>
      {/* --- FIM DA NOVA SEÇÃO --- */}
    </div>
  );
};

export default HomePage;

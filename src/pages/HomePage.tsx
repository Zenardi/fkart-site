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
        {" "}
        {/* Fundo gradiente suave e padding */}
        <div className="container mx-auto">
          <Typography
            as="h2"
            variant="h2"
            color="blue-gray"
            placeholder={undefined}
            className="text-center mb-5 font-bold" // Título em negrito
          >
            NOSSOS CAMPEONATOS DE KART AMADOR
          </Typography>
          <Typography
            color="gray"
            placeholder={undefined}
            className="text-center mb-5 text-lg max-w-3xl mx-auto"
          >
            A Fkart é uma empresa de eventos organizadora de diversos formatos
            de Campeonato de Kart Amador, visando atender a todos os níveis de
            pilotos e dentro da necessidade de cada um deles.
          </Typography>
          <Typography
            color="gray"
            placeholder={undefined}
            className="text-center mb-16 text-lg max-w-3xl mx-auto"
          >
            {" "}
            {/* Aumentei margem inferior */}
            Nossos campeonatos ocorrem tanto durante a semana quanto aos finais
            de semana. Conheça as opções:
          </Typography>
          {/* Grid para os cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {" "}
            {/* Aumentei o gap */}
            {/* Card 1: Happy Hour */}
            <Card
              shadow={true}
              className="border border-gray-200 hover:shadow-lg transition-shadow"
              placeholder={undefined}
            >
              <CardBody className="text-center p-8" placeholder={undefined}>
                {" "}
                {/* Aumentei padding */}
                <FaBeer className="w-12 h-12 text-amber-700 mx-auto mb-5" />{" "}
                {/* Ícone */}
                <Typography
                  as="h5"
                  variant="h5"
                  color="blue-gray"
                  placeholder={undefined}
                  className="mb-3 font-semibold"
                >
                  Fkart Happy Hour
                </Typography>
                <Typography
                  placeholder={undefined}
                  className="text-sm font-normal text-gray-600"
                >
                  Competições quinzenais durante a semana, em kartódromos
                  variados, ideal para relaxar após o trabalho e acelerar com os
                  amigos.
                </Typography>
              </CardBody>
            </Card>
            {/* Card 2: Principal / Champ / Strong */}
            <Card
              shadow={true}
              className="border border-gray-200 hover:shadow-lg transition-shadow"
              placeholder={undefined}
            >
              <CardBody className="text-center p-8" placeholder={undefined}>
                <FaTrophy className="w-12 h-12 text-yellow-800 mx-auto mb-5" />{" "}
                {/* Ícone */}
                <Typography
                  as="h5"
                  variant="h5"
                  color="blue-gray"
                  placeholder={undefined}
                  className="mb-3 font-semibold"
                >
                  FKart Principal / Champ / Strong
                </Typography>
                <Typography
                  placeholder={undefined}
                  className="text-sm font-normal text-gray-600"
                >
                  Campeonatos mensais aos finais de semana, 12 etapas anuais com
                  categorias por nível. Pura competitividade e disputas
                  acirradas.
                </Typography>
              </CardBody>
            </Card>
            {/* Card 3: San Marino Race */}
            <Card
              shadow={true}
              className="border border-gray-200 hover:shadow-lg transition-shadow"
              placeholder={undefined}
            >
              <CardBody className="text-center p-8" placeholder={undefined}>
                <FaMapMarkedAlt className="w-12 h-12 text-red-700 mx-auto mb-5" />{" "}
                {/* Ícone */}
                <Typography
                  as="h5"
                  variant="h5"
                  color="blue-gray"
                  placeholder={undefined}
                  className="mb-3 font-semibold"
                >
                  Fkart San Marino Race
                </Typography>
                <Typography
                  placeholder={undefined}
                  className="text-sm font-normal text-gray-600"
                >
                  Campeonato oficial em Paulínia-SP, aos Domingos, 11 etapas
                  anuais com diversas categorias e a melhor premiação do
                  interior!
                </Typography>
              </CardBody>
            </Card>
            {/* Card 4: Endurance */}
            <Card
              shadow={true}
              className="border border-gray-200 hover:shadow-lg transition-shadow"
              placeholder={undefined}
            >
              <CardBody className="text-center p-8" placeholder={undefined}>
                <FaUsers className="w-12 h-12 text-cyan-700 mx-auto mb-5" />{" "}
                {/* Ícone */}
                <Typography
                  as="h5"
                  variant="h5"
                  color="blue-gray"
                  placeholder={undefined}
                  className="mb-3 font-semibold"
                >
                  Endurance (Individual e Equipes)
                </Typography>
                <Typography
                  placeholder={undefined}
                  className="text-sm font-normal text-gray-600"
                >
                  Provas de longa duração que testam habilidade, físico e
                  estratégia. Corridas de 3 a 6 horas em equipe e desafios
                  individuais.
                </Typography>
              </CardBody>
            </Card>
            {/* Card 5: Torneios Especiais */}
            {/* No grid de 3 colunas, estes 2 últimos podem ficar centralizados se quiser (usando flex) ou apenas alinhados à esquerda */}
            <Card
              shadow={true}
              className="border border-gray-200 hover:shadow-lg transition-shadow"
              placeholder={undefined}
            >
              <CardBody className="text-center p-8" placeholder={undefined}>
                <FaStar className="w-12 h-12 text-indigo-700 mx-auto mb-5" />{" "}
                {/* Ícone */}
                <Typography
                  as="h5"
                  variant="h5"
                  color="blue-gray"
                  placeholder={undefined}
                  className="mb-3 font-semibold"
                >
                  Torneios Especiais
                </Typography>
                <Typography
                  placeholder={undefined}
                  className="text-sm font-normal text-gray-600"
                >
                  Eventos únicos, reais e virtuais, em datas selecionadas.
                  Premiações diferenciadas, incluindo experiências em outras
                  categorias.
                </Typography>
              </CardBody>
            </Card>
            {/* Card Extra (Exemplo - Link para Campeonatos) */}
            {/* Poderia ser um card chamando para a página principal de campeonatos */}
            <Card
              shadow={true}
              className="border border-gray-200 hover:shadow-lg transition-shadow bg-blue-gray-800 text-white flex flex-col justify-center"
              placeholder={undefined}
            >
              <CardBody className="text-center p-8" placeholder={undefined}>
                <FaFlagCheckered className="w-12 h-12 text-white mx-auto mb-5" />
                <Typography
                  as="h5"
                  variant="h5"
                  color="white"
                  placeholder={undefined}
                  className="mb-3 font-semibold"
                >
                  Veja Todos os Detalhes
                </Typography>
                <Typography
                  placeholder={undefined}
                  className="text-sm font-normal text-blue-gray-100 mb-4"
                >
                  Explore cada campeonato, veja calendários, regulamentos e
                  muito mais.
                </Typography>
                <Link to="/campeonatos">
                  <Button
                    variant="gradient"
                    color="white"
                    placeholder={undefined}
                  >
                    Ver Campeonatos
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </div>{" "}
          {/* Fim do grid */}
          {/* Você pode adicionar um botão aqui para levar para a página de campeonatos */}
          {/* Exemplo:
             <div className="text-center mt-16">
                 <Link to="/campeonatos">
                     <Button color="blue" size="lg" placeholder={undefined}>Ver Detalhes dos Campeonatos</Button>
                 </Link>
             </div>
          */}
        </div>{" "}
        {/* Fim do container */}
      </section>
      {/* --- FIM DA NOVA SEÇÃO --- */}
    </div>
  );
};

export default HomePage;

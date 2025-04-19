// src/pages/GrupoFKRPage.tsx
import React from 'react';
import { Typography } from '@material-tailwind/react';

const GrupoFKRPage: React.FC = () => {
  return (
    <div className="space-y-6"> {/* Adiciona espaço vertical entre as seções */}
      <Typography as="h2" variant="h2" color="blue-gray" placeholder={undefined} className="mb-6 border-b pb-2">
        Grupo FKR - Force Kart Racing
      </Typography>

      <section>
        <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-3 font-semibold">
          Quem somos
        </Typography>
        <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
          A Fkart - Force Kart Racing é uma empresa de eventos, formada por um time de pilotos graduados, que organiza diversos formatos de Campeonato de Kart Amador (Campeonato kart rental). Nossa atuação visa atender a todos os níveis de pilotos e necessidades de cada um deles, desde quem ainda está aprendendo a andar de kart até os mais experientes, que buscam maior performance em uma verdadeira equipe de kart.
        </Typography>
      </section>

      <section>
          <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-3 font-semibold">
            Fazendo história no Kartismo
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
          O grupo nasceu a partir da inciativa do piloto Marcos Takuma e seus amigos, que são apaixonados pelo automobilismo e há mais de 10 anos se dedicam e vivenciam o mundo do kartismo.
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            Com o objetivo de trazer a emoção das maiores provas do automobilismo aos praticantes do kart, a Force Kart Racing criou vários modelos de campeonatos de kart amador, onde buscam reunir os amantes da velocidade em grupos para fazer amigos, compartilhar experiências e disputarem competições que testam a habilidade de pilotagem, parceria do piloto com a equipe, capacidade de montar estratégias e outros fatores motivacionais, testados durante e após cada etapa.
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            Com o crescimento do número de participantes, a Force Kart Racing criou a FKR Store, marca que desenvolve macacões, camisetas, balaclavas e jaquetas. Uma linha completa de vestuário para facilitar a identificação dos participantes do time. Ao longo do tempo, a Fkart construiu uma história de sucesso, que a tornou um verdadeiro nome de equipe de kart amador no Brasil.
          </Typography>
        </section>

      <section>
          <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-3 font-semibold">
            Objetivo dessa Equipe de Kart
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            Oferecer uma experiência única, registrando este momento especial, é o objetivo dessa Equipe de Kart. As provas da FKart buscam aprimorar as habilidades de pilotagem, superar desafios e iniciar a trajetória de quem sonha em ser um piloto profissional. Além disso, o esporte é uma oportunidade de viver experiências únicas, estar em um ambiente agradável, fazer novos amigos e trocar a correria do dia-a-dia por uma corrida de kart divertida e desafiadora.
          </Typography>
      </section>

      <section>
          <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-3 font-semibold">
            Nossos destaques em corrida de kart
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            A cada ano, novos desafios são criados. Os próprios pilotos têm autonomia para sugerir melhorias em cada etapa da disputa de kart, a partir da participação ativa com os organizadores do evento.
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            Dentre os desafios elaborados durante toda a temporada, a etapa chamada de Qualifying Day, busca classificar os pilotos mais rápidos na pista, utilizando o mesmo sistema da qualificação da Fórmula 1. Com sessões de Q1, Q2 e Q3, os pilotos de kart realizam a disputa por milésimos de segundos para conseguir se classificar na melhor posição no grid de largada da segunda etapa.
          </Typography>
           <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            O piloto de kart que conquistar a pole position tem a oportunidade de colocar seu nome no troféu da FKart, que fica em sua sede. A premiação e a comemoração fazem parte da prova das 500 milhas de Indianapolis da Formula Indy. Os 10 pilotos com os tempos mais rápidos nesta etapa recebem uma pequena pontuação pelo desempenho obtido em pista. Essa é uma das provas mais aguardadas pelos pilotos da FKart.
          </Typography>
      </section>

      <section>
          <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-3 font-semibold">
            Endurance por equipe de kart
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            O endurance é uma prova que busca deixar nossos pilotos com a sensação das provas de longa duração do automobilismo mundial. O condicionamento físico, o trabalho em equipe de kart e o desenvolvimento de estratégias são essenciais para um bom resultado. Utilizamos o sistema de largada em fila indiana e a formação do grid no estilo da tradicional prova de Le Mans.
          </Typography>
      </section>

      <section>
          <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-3 font-semibold">
            Endurance de pilotagem de kart individual
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            Realizamos duas provas de pilotagem de kart individual, na modalidade endurance, durante todo ano, onde testamos o máximo da habilidade e criatividades dos nossos participantes.
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            O piloto precisa criar uma estratégia para acompanhar sua parada obrigatória de três minutos, com troca de Kart, e não perder muito tempo para voltar para a pista em uma posição favorável. E ainda, para que o evento fique mais emocionante, o número máximo permitido de pilotos é colocado na pista. Ultrapassagens e disputas de posições geram muita adrenalina e expectativa nessa corrida de kart.
          </Typography>
      </section>

      <section>
          <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-3 font-semibold">
            Competitividade ao pilotar kart
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            No primeiro semestre, é realizado um formato em que todos os pilotos inscritos podem correr entre si em alguma prova. A combinação de resultados é necessária para colocar o piloto em uma posição positiva no segundo semestre. Este modelo exige dos pilotos a avaliação de cada situação de corrida, ao pilotar kart, para entender suas possibilidades. A FKart identifica os melhores pilotos durante este período e os classifica por categorias no segundo semestre.
          </Typography>
      </section>

      <section>
          <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-3 font-semibold">
            Organização das provas de Kart
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            Realizada pelos staffs da Fkart - Force Kart Racing em vários Kartódromos de SP, a organização das provas de kart visa montar eventos com ótima estrutura, a fim de que este dia seja inesquecível para cada participante. Com tendas de apoio, arcos infláveis e premiações, os eventos da FKR possuem a infraestrutura necessária para que você se sinta em um campeonato de kart profissional.
          </Typography>
      </section>

      <section>
          <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="mb-3 font-semibold">
            Participação no Ranking PKI
          </Typography>
          <Typography as="p" placeholder={undefined} className="text-justify mb-4 text-gray-700 leading-relaxed">
            Desde o início de 2018, a Fkart é associada, ao Portal do Kart Indoor, que é responsável pela elaboração do Ranking Nacional P.K.I. Os pilotos de kart amador são classificados de acordo com seus resultados nas competições registradas pela organização da publicação. Uma verdadeira vitrine virtual de que os ranqueados podem se orgulhar de fazerem parte
          </Typography>
      </section>
    </div>
  );
};

export default GrupoFKRPage;
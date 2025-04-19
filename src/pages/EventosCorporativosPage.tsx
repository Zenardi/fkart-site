// src/pages/EventosCorporativosPage.tsx
import React from 'react';
import { Typography } from '@material-tailwind/react';
// Se no futuro "contato" virar um link para outra página:
// import { Link } from 'react-router-dom';

const EventosCorporativosPage: React.FC = () => {
  return (
    <div className="space-y-6"> {/* Espaçamento entre parágrafos */}
      <Typography as="h2" variant="h2" color="blue-gray" placeholder={undefined} className="mb-6 border-b pb-2">
        Eventos Corporativos FKR
      </Typography>

      <Typography as="p" placeholder={undefined} className="text-gray-700 leading-relaxed">
        Realize seu evento com a equipe Fkart – Force Kart Racing. Nosso staff possui grande experiência na realização de confraternizações, apresentações de produtos, premiações internas, eventos motivacionais e reuniões em geral. Sempre nos melhores kartódromos de São Paulo.
      </Typography>

      <Typography as="p" placeholder={undefined} className="text-gray-700 leading-relaxed">
        Nossa proposta é <strong className="font-semibold text-blue-gray-800">oferecer uma experiência única, marcante e personalizada</strong> para seus colaboradores, clientes ou fornecedores, através de uma estrutura especialmente preparada para recebê-los. Dispomos de tendas de apoio, arcos infláveis e premiações que farão você e seus convidados se sentirem em um campeonato de kart profissional.
      </Typography>

      <Typography as="p" placeholder={undefined} className="text-gray-700 leading-relaxed">
        Para mais informações, entre em contato conosco!
        {/* No futuro, você pode transformar "contato" em um link:
           Ex: <Link to="/contato" className="text-blue-600 hover:underline font-medium">contato</Link> conosco!
           Ou exibir informações de contato diretamente aqui.
        */}
      </Typography>
    </div>
  );
};

export default EventosCorporativosPage;
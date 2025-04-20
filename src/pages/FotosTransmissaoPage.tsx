// src/pages/FotosTransmissaoPage.tsx
import React from 'react';
import { Typography, Button, Card, CardBody } from '@material-tailwind/react';

// Opcional: Ícones para dar um toque visual
// Instale com: npm install react-icons
import { FaGoogleDrive, FaYoutube } from 'react-icons/fa';

const FotosTransmissaoPage: React.FC = () => {

  // --- IMPORTANTE: Substitua pelas URLs reais ---
  const linkPastaPrincipalDrive = 'https://drive.google.com/drive/folders/19359XXJB-cGQZES1KZKeL9YjiH9WlB8F?usp=sharing'; // Ex: Link compartilhado "Qualquer pessoa com o link pode ver"
  // Se tiver links específicos por ano ou campeonato, pode adicionar mais variáveis
  // const linkPastaDrive2024 = 'URL_PASTA_2024';

  const linkCanalYouTube = 'https://www.youtube.com/@ForceKartRacing/streams'; // Ex: https://www.youtube.com/c/SeuCanal
  // --- FIM IMPORTANTE ---


  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-12"> {/* Container principal */}

      <Typography as="h2" variant="h2" color="blue-gray" placeholder={undefined} className="text-center border-b pb-3 mb-10">
        Fotos e Transmissão ao Vivo
      </Typography>

      {/* Seção Google Drive */}
      <Card placeholder={undefined}>
        <CardBody placeholder={undefined}>
          <div className="flex items-center gap-4 mb-4">
            <FaGoogleDrive className="w-8 h-8 text-blue-500 flex-shrink-0" /> {/* Ícone Drive */}
            <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="font-semibold">
              Galeria de Fotos (Google Drive)
            </Typography>
          </div>
          <Typography placeholder={undefined} className="mb-5 text-gray-700 leading-relaxed">
            Confira as fotos oficiais de nossas etapas, treinos e eventos especiais. Clique no link abaixo para acessar nossa pasta compartilhada no Google Drive.
          </Typography>
          {/* Link(s) para o Drive */}
          <div className="mt-4">
            <a href={linkPastaPrincipalDrive} target="_blank" rel="noopener noreferrer">
              <Button color="blue" className="flex items-center gap-2" placeholder={undefined}>
                 <FaGoogleDrive className="w-5 h-5" />
                 Acessar Fotos no Google Drive
              </Button>
            </a>
            {/* Adicione mais botões/links se tiver pastas específicas (ex: por ano) */}
            {/*
            <a href={linkPastaDrive2024} target="_blank" rel="noopener noreferrer" className="ml-4">
              <Button variant="outlined" color="blue" className="flex items-center gap-2" placeholder={undefined}>
                 <FaGoogleDrive className="w-5 h-5" />
                 Fotos 2024
              </Button>
            </a>
            */}
          </div>
        </CardBody>
      </Card>

      {/* Seção YouTube */}
      <Card placeholder={undefined}>
        <CardBody placeholder={undefined}>
           <div className="flex items-center gap-4 mb-4">
             <FaYoutube className="w-8 h-8 text-red-600 flex-shrink-0" /> {/* Ícone YouTube */}
             <Typography as="h4" variant="h4" color="blue-gray" placeholder={undefined} className="font-semibold">
               Transmissões ao Vivo (YouTube)
             </Typography>
           </div>
          <Typography placeholder={undefined} className="mb-5 text-gray-700 leading-relaxed">
            Acompanhe ao vivo as corridas mais emocionantes! Transmitimos as etapas dos nossos principais campeonatos em nosso canal oficial do YouTube. Inscreva-se e ative as notificações!
          </Typography>
          {/* Link para o YouTube */}
          <div className="mt-4">
            <a href={linkCanalYouTube} target="_blank" rel="noopener noreferrer">
              <Button color="red" className="flex items-center gap-2" placeholder={undefined}>
                <FaYoutube className="w-5 h-5" />
                Visitar Canal no YouTube
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>

    </div>
  );
};

export default FotosTransmissaoPage;
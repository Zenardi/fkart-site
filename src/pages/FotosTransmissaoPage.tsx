// src/pages/FotosTransmissaoPage.tsx
import React from "react";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";

// Opcional: Ícones para dar um toque visual
// Instale com: npm install react-icons
import { FaGoogleDrive, FaYoutube } from "react-icons/fa";

const FotosTransmissaoPage: React.FC = () => {
  // --- IMPORTANTE: Substitua pelas URLs reais ---
  const linkPastaPrincipalDrive =
    "https://drive.google.com/drive/folders/19359XXJB-cGQZES1KZKeL9YjiH9WlB8F?usp=sharing"; // Ex: Link compartilhado "Qualquer pessoa com o link pode ver"
  // Se tiver links específicos por ano ou campeonato, pode adicionar mais variáveis
  // const linkPastaDrive2024 = 'URL_PASTA_2024';

  const linkCanalYouTube = "https://www.youtube.com/@ForceKartRacing/streams"; // Ex: https://www.youtube.com/c/SeuCanal
  // --- FIM IMPORTANTE ---

  const idVideoMaisRecente = "Ua8rJ41Yi_4"; // Ex: 'dQw4w9WgXcQ'

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-12">
      {" "}
      {/* Container principal */}
      <Typography
        as="h2"
        variant="h2"
        color="blue-gray"
        placeholder={undefined}
        className="text-center border-b pb-3 mb-10"
      >
        Fotos e Transmissão ao Vivo
      </Typography>
      {/* Seção Google Drive */}
      <Card placeholder={undefined}>
        <CardBody placeholder={undefined}>
          <div className="flex items-center gap-4 mb-4">
            <FaGoogleDrive className="w-8 h-8 text-blue-500 flex-shrink-0" />{" "}
            {/* Ícone Drive */}
            <Typography
              as="h4"
              variant="h4"
              color="blue-gray"
              placeholder={undefined}
              className="font-semibold"
            >
              Galeria de Fotos (Google Drive)
            </Typography>
          </div>
          <Typography
            placeholder={undefined}
            className="mb-5 text-gray-700 leading-relaxed"
          >
            Confira as fotos oficiais de nossas etapas, treinos e eventos
            especiais. Clique no link abaixo para acessar nossa pasta
            compartilhada no Google Drive.
          </Typography>
          {/* Link(s) para o Drive */}
          <div className="mt-4">
            <a
              href={linkPastaPrincipalDrive}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                color="blue"
                className="flex items-center gap-2"
                placeholder={undefined}
              >
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
      {/* --- Seção YouTube (MODIFICADA) --- */}
      <Card
        placeholder={undefined}
        shadow={false}
        className="border border-blue-gray-100"
      >
        <CardBody placeholder={undefined}>
          <div className="flex items-center gap-4 mb-4">
            <FaYoutube className="w-8 h-8 text-red-600 flex-shrink-0" />
            <Typography
              as="h2"
              variant="h4"
              color="blue-gray"
              placeholder={undefined}
              className="font-semibold"
            >
              Última Transmissão (YouTube)
            </Typography>
          </div>
          <Typography
            placeholder={undefined}
            className="mb-6 text-gray-700 leading-relaxed"
          >
            Veja abaixo nossa última transmissão! Para conferir todos os vídeos
            e se inscrever em nosso canal, clique no botão mais abaixo.
          </Typography>

          {/* --- Vídeo Embutido --- */}
          {idVideoMaisRecente ? (
            <div className="w-full max-w-2xl mx-auto aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${idVideoMaisRecente}`}
                title="Última Transmissão FKR no YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            // Mantém a mensagem para quando não há ID
            <Typography
              placeholder={undefined}
              className="text-center text-gray-500 italic mb-8"
            >
              (Nenhum vídeo selecionado para exibição no momento)
            </Typography>
          )}
          {/* --- Fim Vídeo Embutido --- */}

          {/* Botão para acessar o canal (Mantido) */}
          <div className="text-center">
            <a
              href={linkCanalYouTube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                color="red"
                className="flex items-center justify-center gap-3"
                placeholder={undefined}
              >
                <FaYoutube className="w-5 h-5" />
                Visitar Canal Completo no YouTube
              </Button>
            </a>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default FotosTransmissaoPage;

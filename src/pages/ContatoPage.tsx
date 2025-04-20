// src/pages/ContatoPage.tsx
import React from 'react';
import { Typography, Button } from '@material-tailwind/react';

// Opcional: Para adicionar um ícone do WhatsApp ao botão
// Instale com: npm install react-icons
import { FaWhatsapp } from 'react-icons/fa';

const ContatoPage: React.FC = () => {
  // --- IMPORTANTE ---
  // Substitua 'SEU_NUMERO_AQUI' pelo número de telefone completo no formato internacional
  // SEM o '+', espaços, hífens ou parênteses.
  // Exemplo para Brasil (SP DDD 11): 5511912345678
  const seuNumeroWhatsApp = '5511999435453'; // <-- COLOQUE O NÚMERO CORRETO AQUI
  // --- FIM IMPORTANTE ---

  const linkWhatsApp = `https://wa.me/${seuNumeroWhatsApp}`;

  return (
    // Container para centralizar e adicionar padding
    <div className="max-w-xl mx-auto text-center py-12 px-4">
      <Typography
        as="h2"
        variant="h2"
        color="blue-gray"
        placeholder={undefined}
        className="mb-4"
      >
        Entre em Contato
      </Typography>

      <Typography placeholder={undefined} className="mb-10 text-lg text-gray-700">
        Ficou com alguma dúvida ou quer mais detalhes sobre nossos campeonatos e eventos?
        Clique no botão abaixo e fale diretamente conosco pelo WhatsApp!
      </Typography>

      {/* Link <a> envolvendo o botão para funcionalidade de clique */}
      <a
        href={linkWhatsApp}
        target="_blank" // Abre o link no app do WhatsApp ou em nova aba
        rel="noopener noreferrer" // Medida de segurança recomendada para target="_blank"
        className="inline-block" // Garante que o link se comporte como bloco para o botão
      >
        <Button
          color="green" // Cor verde característica do WhatsApp
          size="lg"    // Tamanho do botão (lg = grande)
          className="flex items-center justify-center gap-3" // Alinha ícone e texto
          placeholder={undefined}
        >
          {/* Ícone (opcional, usando react-icons) */}
          <FaWhatsapp className="w-6 h-6" />
          Conversar no WhatsApp
        </Button>
      </a>
    </div>
  );
};

export default ContatoPage;
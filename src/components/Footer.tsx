// src/components/Footer.tsx (Modificado)
import React from 'react';
import { Typography } from "@material-tailwind/react";

// 1. Importar os ícones desejados de react-icons
// (Lembre-se de instalar: npm install react-icons)
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe, FaEnvelope } from 'react-icons/fa'; // Escolhi FaFacebookF por ser só o F

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // 2. Definir os links (adicionando https:// e mailto:)
  const socialLinks = [
    {
      name: 'Website',
      url: 'https://grupofkr.com.br', // Adicionado https://
      icon: FaGlobe,
      label: 'Website Oficial do Grupo FKR',
      hoverColor: 'hover:text-blue-gray-900', // Cor genérica para o globo
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/FKart.fkr', // Adicionado https://
      icon: FaFacebookF,
      label: 'Página do FKart no Facebook',
      hoverColor: 'hover:text-blue-600', // Cor do Facebook
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/FkartRacing', // Adicionado https://
      icon: FaTwitter,
      label: 'Perfil do FKart Racing no Twitter',
      hoverColor: 'hover:text-sky-500', // Cor do Twitter
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/fkart01', // Adicionado https://
      icon: FaInstagram,
      label: 'Perfil do FKart no Instagram',
      hoverColor: 'hover:text-pink-600', // Cor do Instagram
    },
    {
      name: 'Email',
      url: 'mailto:fkartracing@gmail.com', // Usando mailto:
      icon: FaEnvelope,
      label: 'Enviar email para fkartracing@gmail.com',
      hoverColor: 'hover:text-red-600', // Cor para email (exemplo)
    },
  ];

  return (
    <footer className="w-full bg-gray-100 p-8 mt-16 border-t border-blue-gray-100"> {/* Ajuste de estilo: bg, padding, margem superior, borda */}
      <div className="container mx-auto flex flex-col items-center gap-y-6"> {/* Centraliza e adiciona espaçamento vertical */}

        {/* 3. Seção de Ícones Sociais */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4"> {/* Permite quebra de linha e define espaçamento */}
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              // Abrir links externos em nova aba (exceto mailto:)
              target={link.name !== 'Email' ? '_blank' : '_self'}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : ''}
              title={link.label} // Tooltip para acessibilidade/UX
              aria-label={link.label} // Para leitores de tela
            >
              {/* Renderiza o Ícone dinamicamente */}
              <link.icon className={`w-6 h-6 text-gray-600 transition-colors duration-200 ${link.hoverColor}`} />
            </a>
          ))}
        </div>

        {/* 4. Texto de Copyright */}
        <Typography
          color="blue-gray"
          className="text-center font-normal text-sm" // Ajustado tamanho da fonte
          placeholder={undefined} // Necessário por causa dos erros anteriores
        >
          &copy; {currentYear} Force Kart Racing (FKart) | fkartracing@gmail.com | Todos os direitos reservados.
          {/* Opcional: Adicionar email também no texto */}
        </Typography>
      </div>
    </footer>
  );
}
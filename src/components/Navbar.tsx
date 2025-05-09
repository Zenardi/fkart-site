// src/components/Navbar.tsx (Corrigido)
import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar, // Renomeando para evitar conflito de nome
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
// Remova a importação do Button se não for usado aqui
// import { Button } from "@material-tailwind/react";
import logoFkr from '../assets/images/fkart-logo.png';


export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    };
  }, []);

  // Função para fechar o menu (útil para os links)
  const closeMobileMenu = () => setOpenNav(false);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* Erro corrigido: Adicionado placeholder={undefined} */}
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/" className="flex items-center hover:text-red-500 transition-colors" onClick={closeMobileMenu}>
          Início
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/campeonatos" className="flex items-center hover:text-red-500 transition-colors" onClick={closeMobileMenu}>
          Campeonatos
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/grupo-fkr"className="flex items-center hover:text-red-500 transition-colors" onClick={closeMobileMenu}>
          Grupo FKR
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/eventos-corporativos" className="flex items-center hover:text-red-500 transition-colors" onClick={closeMobileMenu}>
          Eventos Corporativos
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/calendario" className="flex items-center hover:text-red-500 transition-colors" onClick={closeMobileMenu}>
          Calendário
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/fotos-transmissao" className="flex items-center hover:text-red-500 transition-colors" onClick={closeMobileMenu}>
          Fotos e Transmissão
        </Link>
      </Typography>
      {/* Requer Backend */}
      {/* <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/resultados" className="flex items-center hover:text-red-500 transition-colors" onClick={closeMobileMenu}>
          Resultados
        </Link>
      </Typography> */}
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/academia-fkr" className="flex items-center hover:text-red-500 transition-colors" onClick={closeMobileMenu}>
          Academia FKR
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/contato" className="flex items-center hover:text-red-500 transition-colors" onClick={closeMobileMenu}>
          Contato
        </Link>
      </Typography>
      {/* Adicione mais links aqui (Sobre, Contato, etc.) */}
    </ul>
  );

  return (
    <MTNavbar
      // 1. Fundo do Navbar alterado para branco (ou um cinza muito claro como bg-gray-50)
      // Borda inferior sutil ou temática vermelha
      className="sticky top-0 z-[100] h-max max-w-full rounded-none px-0 bg-white border-b border-blue-gray-100"
      // Exemplo com borda vermelha:
      // className="sticky top-0 z-[100] h-max max-w-full rounded-none px-0 bg-white border-b-2 border-red-500"
      placeholder={undefined}
      fullWidth // Garante que o navbar use a largura total se o conteúdo interno for menor
    >
      {/* Container para centralizar o conteúdo */}
      {/* Cor do texto padrão alterada para text-blue-gray-900 */}
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 px-4 py-2 lg:px-8 lg:py-2">
        {/* Logo ou Nome do Site */}
        <Link to="/" className="mr-4 cursor-pointer py-1.5 flex items-center gap-2">
          {/* Se tiver um logo em imagem para fundo claro: */}
          {/* <img src={logoFkEscuro} alt="Force Kart Racing" className="h-8 w-auto" /> */}
          <img src={logoFkr} alt="Force Kart Racing Logo" className="h-8 w-auto" />
          {/* <Typography as="span" className="font-semibold text-xl lg:text-2xl">
            Force Kart Racing
          </Typography> */}
        </Link>

        {/* Navegação Desktop */}
        <div className="hidden lg:block">{navList}</div>

        {/* Botão do Menu Mobile */}
        <div className="lg:hidden">
          <IconButton
            variant="text"
            // 2. Cor do ícone alterada para vermelho
            // Usar a prop 'color' do Material Tailwind com um valor de cor do tema,
            // ou className para cores específicas do Tailwind.
            // 'red' é uma cor padrão do tema Material Tailwind.
            color="red"
            // Alternativa com Tailwind puro: className="h-8 w-8 text-red-500 hover:bg-red-500/10 ..."
            className="h-8 w-8 hover:bg-red-500/10 active:bg-red-500/20 focus:bg-red-500/10"
            ripple={true}
            onClick={() => setOpenNav(!openNav)}
            placeholder={undefined}
            aria-label={openNav ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      {/* Conteúdo do Menu Mobile (Collapse) */}
      <Collapse
        open={openNav}
        // 3. Fundo do Collapse alterado para branco (ou cor clara correspondente)
        // Os links no navList já estão com color="blue-gray"
        className="bg-white text-blue-gray-900 border-t border-blue-gray-100 overflow-y-auto max-h-[calc(100vh-70px)] lg:hidden"
      >
        <div className="container mx-auto py-2 px-4">
            {navList}
        </div>
      </Collapse>
    </MTNavbar>
  );
}
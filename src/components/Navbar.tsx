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
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* Erro corrigido: Adicionado placeholder={undefined} */}
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/" className="flex items-center hover:text-blue-500 transition-colors">
          Início
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/campeonatos" className="flex items-center hover:text-blue-500 transition-colors">
          Campeonatos
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/grupo-fkr" className="flex items-center hover:text-blue-500 transition-colors">
          Grupo FKR
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/eventos-corporativos" className="flex items-center hover:text-blue-500 transition-colors">
          Eventos Corporativos
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/calendario" className="flex items-center hover:text-blue-500 transition-colors">
          Calendário
        </Link>
      </Typography>
      {/* Adicione mais links aqui (Sobre, Contato, etc.) */}
    </ul>
  );

  return (
    /* Erro corrigido: Adicionado placeholder={undefined} */
    <MTNavbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4" placeholder={undefined}>
      <div className="flex items-center justify-between text-blue-gray-900 container mx-auto">
        {/* Erro TS2322 corrigido: Usar Link envolvendo o Typography ou o texto */}
        <Link to="/" className="mr-4 cursor-pointer py-1.5">
          <img src={logoFkr} alt="Force Kart Racing Logo" className="h-8 w-auto" />
          <Typography
            as="span" // Pode ser span ou outra tag apropriada que não seja 'a'
            variant="h6" // Ou outro variant adequado
            color="blue-gray" // Herdará a cor do link ou defina aqui
            placeholder={undefined}
            className="font-medium" // Mantenha/ajuste as classes
            children={undefined}          >
          </Typography>
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {/* Adicione botões como Login/Cadastro se necessário */}
          {/* Erro corrigido: Adicionado placeholder={undefined} */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            placeholder={undefined}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav} > {/* Adicionado placeholder */}
        {navList}
        {/* Adicione botões aqui também se necessário para mobile */}
      </Collapse>
    </MTNavbar>
  );
}
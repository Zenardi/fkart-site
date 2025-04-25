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
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/fotos-transmissao" className="flex items-center hover:text-blue-500 transition-colors">
          Fotos e Transmissão
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/resultados" className="flex items-center hover:text-blue-500 transition-colors">
          Resultados
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/academia-fkr" className="flex items-center hover:text-blue-500 transition-colors">
          Academia FKR
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal" placeholder={undefined}>
        <Link to="/contato" className="flex items-center hover:text-blue-500 transition-colors">
          Contato
        </Link>
      </Typography>
      {/* Adicione mais links aqui (Sobre, Contato, etc.) */}
    </ul>
  );

  return (
    /* Erro corrigido: Adicionado placeholder={undefined} */
    <MTNavbar className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-gray-100 border-b border-red-200" placeholder={undefined}>
      <div className="flex items-center justify-between text-white container mx-auto">
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
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
            placeholder={undefined}
          >
            {/* Ícones do menu hamburguer (ajustar cor se necessário) */}
            {openNav ? ( <svg /* ... icon X ... */ /> ) : ( <svg /* ... icon bars ... */ /> )}
          </IconButton>
        </div>
      </div>
      {/* Collapse para mobile também precisa de fundo escuro */}
      <Collapse open={openNav} className="bg-gray-900 text-white" placeholder={undefined}>
        {navList}
      </Collapse>
    </MTNavbar>
  );
}
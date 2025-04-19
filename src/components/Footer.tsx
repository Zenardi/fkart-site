// src/components/Footer.tsx (Exemplo básico)
import { Typography } from "@material-tailwind/react";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-100 p-8 mt-10 border-t border-blue-gray-50">
      <div className="text-center font-normal text-blue-gray-900 container mx-auto">
        &copy; {currentYear} Force Kart Racing. Todos os direitos reservados.
        {/* Adicione links para redes sociais ou outras informações */}
      </div>
    </footer>
  );
}
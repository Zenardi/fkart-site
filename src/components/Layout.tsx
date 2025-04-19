// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet renderiza as rotas filhas
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from '@material-tailwind/react'; // Mantenha o ThemeProvider aqui se não estiver no main.tsx

const Layout: React.FC = () => {
  return (
    // <ThemeProvider>  // Remova daqui se já estiver no main.tsx
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {/* O conteúdo da página específica será renderizado aqui */}
          <Outlet />
        </main>
        <Footer />
      </div>
    // </ThemeProvider>
  );
};

export default Layout;
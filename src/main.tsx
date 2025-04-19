// src/main.tsx (Modifique o existente)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@material-tailwind/react';
import { AppRouter } from './router'; // Importe o router configurado
//import './styles/index.css'; // Seus estilos globais e Tailwind
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter /> {/* Renderize o RouterProvider */}
    </ThemeProvider>
  </React.StrictMode>
);
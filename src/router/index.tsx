// src/router/index.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App'; // Seu componente App principal que pode incluir o Layout
import HomePage from '../pages/HomePage';
import ChampionshipsListPage from '../pages/ChampionshipsListPage';
import ChampionshipDetailPage from '../pages/ChampionshipDetailPage';
import GrupoFKRPage from '../pages/GrupoFKRPage';
import EventosCorporativosPage from '../pages/EventosCorporativosPage';
import CalendarioPage from '../pages/CalendarioPage';
import ContatoPage from '../pages/ContatoPage';
import FotosTransmissaoPage from '../pages/FotosTransmissaoPage';
import ResultadosPage from '../pages/ResultadosPage'; 
import AcademiaFKRPage from '../pages/AcademiaFKRPage';
// Importe outras páginas que criar

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Usar App como layout base para as rotas filhas
    // errorElement: <ErrorPage />, // Opcional: Uma página de erro
    children: [
      {
        index: true, // Rota padrão para '/'
        element: <HomePage />,
      },
      {
        path: 'campeonatos',
        element: <ChampionshipsListPage />,
      },
      {
        
        path: 'campeonatos/:championshipId',
        element: <ChampionshipDetailPage />,
      },
      {
        path: '/grupo-fkr', // O caminho que aparecerá na URL (ex: seusite.com/grupo-fkr)
        element: <GrupoFKRPage />, // O componente que será renderizado
      },
      { 
        path: '/eventos-corporativos', // O caminho na URL
        element: <EventosCorporativosPage />, // O componente a ser renderizado
      },
      {
        path: '/calendario',
        element: <CalendarioPage />,
      },
      {
        path: '/fotos-transmissao', // URL da página
        element: <FotosTransmissaoPage />, // Componente da página
      },
      {
        path: '/resultados',
        element: <ResultadosPage />,
      },
      { 
        path: '/academia-fkr', // URL
        element: <AcademiaFKRPage />, // Componente
      },
      {
        path: '/contato',
        element: <ContatoPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
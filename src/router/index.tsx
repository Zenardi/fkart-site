// src/router/index.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App'; // Seu componente App principal que pode incluir o Layout
import HomePage from '../pages/HomePage';
import ChampionshipsListPage from '../pages/ChampionshipsListPage';
import ChampionshipDetailPage from '../pages/ChampionshipDetailPage';
import GrupoFKRPage from '../pages/GrupoFKRPage';
import EventosCorporativosPage from '../pages/EventosCorporativosPage';
import CalendarioPage from '../pages/CalendarioPage';
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
        // Rota dinâmica para detalhes do campeonato
        path: 'campeonatos/:championshipId',
        element: <ChampionshipDetailPage />,
      },
      { // <-- 2. Adicione a rota para a nova página
        path: '/grupo-fkr', // O caminho que aparecerá na URL (ex: seusite.com/grupo-fkr)
        element: <GrupoFKRPage />, // O componente que será renderizado
      },
      { // <-- 2. Adicione a rota para Eventos Corporativos
        path: '/eventos-corporativos', // O caminho na URL
        element: <EventosCorporativosPage />, // O componente a ser renderizado
      },
      { // <-- 2. Adicione a rota do Calendário
        path: '/calendario',
        element: <CalendarioPage />,
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
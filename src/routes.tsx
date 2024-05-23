import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Sobre from './pages/sobre';
import NotFound from './pages/404';
import Codigo from './pages/codigo';
import Etapa1 from './pages/etapa1'
import Etapa2 from './pages/etapa2'
import CriarLogin from './pages/criar-login';
import NovoRelatorio from './pages/novo-relatorio';
import Formcheck from './pages/checklist';
import Formcheck2 from './pages/checklist-2';
import Formcheck3 from './pages/checklist-3';
import Formcheck4 from './pages/checklist-4';
import Formcheck5 from './pages/checklist-5';
import Formcheck6 from './pages/checklist-6';
import Formcheck7 from './pages/checklist-7';
import Formcheck8 from './pages/checklist-8';
import Formcheck9 from './pages/checklist-9';

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound /> },
  { path: '/sobre', element: <Sobre /> },
  { path: '/tarefas', element: <Tarefas /> },
  { path: '/formulario', element: <Formulario /> }, 
  { path: '/formulario-diferente', element: <Formulario /> }, 
  { path: '/codigo', element: <Codigo /> },
  { path: '/etapa1', element: <Etapa1 />},
  { path: '/etapa2', element: <Etapa2 />},
  { path: '/login', element: <Login /> },
  { path: '/criar-login', element: <CriarLogin /> },
  { path: '/novo-relatorio', element: <NovoRelatorio /> },
  { path: '/checklist', element: <Formcheck /> },
  { path: '/checklist-2', element: <Formcheck2 /> },
  { path: '/checklist-3', element: <Formcheck3 /> },
  { path: '/checklist-4', element: <Formcheck4 /> },
  { path: '/checklist-5', element: <Formcheck5 /> },
  { path: '/checklist-6', element: <Formcheck6 /> },
  { path: '/checklist-7', element: <Formcheck7 /> },
  { path: '/checklist-8', element: <Formcheck8 /> },
  { path: '/checklist-9', element: <Formcheck9 /> }

]);

export default router;

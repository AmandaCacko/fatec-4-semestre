import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import Tarefas from './pages/tarefas'
import Formulario from './pages/formulario'
import Codigo from './pages/codigo'
import CriarLogin from './pages/criar-login'
import NovoRelatorio from './pages/novo-relatorio'
import Formcheck from './pages/checklist'
import Formcheckfim from './pages/checklistfim'
import Formcheckfimnao from './pages/checklistnao'
import Formcheckfimsim from './pages/checklistsim'
import ChecklistStart from './pages/checklistlogo'


const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/sobre', element: <Sobre />},
  {path: '/tarefas', element: <Tarefas />},
  {path: '/formulario', element: <Formulario />},
  {path: '/formulario', element: <Formulario />},
  {path: '/codigo', element: <Codigo />},
  {path: '/login', element: <Login />},
  {path: '/criar-login', element: <CriarLogin />},
  {path: '/novo-relatorio', element: <NovoRelatorio />},
  {path: '/checklist', element: <Formcheck />},
  {path: '/checklistfim', element: <Formcheckfim />},
  {path: '/checklistfimnao', element: <Formcheckfimnao />},
  {path: '/checklistfimsim', element: <Formcheckfimsim />},
  {path: '/ChecklistStart', element: <ChecklistStart />}
])

export default router
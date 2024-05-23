import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import Tarefas from './pages/tarefas'
import Formulario from './pages/formulario'
import Codigo from './pages/codigo'
import Etapa1 from './pages/etapa1'
import Etapa2 from './pages/etapa2'
import CriarLogin from './pages/criar-login'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/sobre', element: <Sobre />},
  {path: '/codigo', element: <Codigo />},
  {path: '/etapa1', element: <Etapa1 />},
  {path: '/etapa2', element: <Etapa2 />},
  {path: '/login', element: <Login />},
  {path: '/criar-login', element: <CriarLogin />}
])

export default router
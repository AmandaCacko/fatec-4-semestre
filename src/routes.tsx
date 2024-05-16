import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Sobre from './pages/sobre'
import NotFound from './pages/404'
import Tarefas from './pages/tarefas'
import Formulario from './pages/formulario'
import Codigo from './pages/codigo'

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/sobre', element: <Sobre />},
  {path: '/tarefas', element: <Tarefas />},
  {path: '/formulario', element: <Formulario />},
  {path: '/formulario', element: <Formulario />},
  {path: '/codigo', element: <Codigo />},
  {path: '/login', element: <Login />}
])

export default router
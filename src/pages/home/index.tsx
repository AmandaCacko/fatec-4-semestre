import { Link } from "react-router-dom"
import Layout from "../../components/layout"
//<img src=""/>

function Home() {
    return (
        <Layout>
            <div>
                <h1>Home</h1>
                <p>Página usada para testar e praticar as funcionalidades do React.</p>
                <Link to='/Formulario'>Formulario</Link>
                <br></br>
                <Link to='/Tarefas'>Tarefas</Link>
                <br></br>
                <Link to='/Sobre'>Sobre</Link>
            </div>
        </Layout>
    )
}

export default Home
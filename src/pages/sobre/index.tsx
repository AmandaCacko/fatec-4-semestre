import { Link } from "react-router-dom"
import Layout from "../../components/layout"

function Sobre() {
    return (
        <Layout>
            <div>
                <h1>Sobre</h1>
                <p>Site criado por: Amanda, Pedro e Vitor.</p>
                <Link to='/'>Voltar para Home</Link>
            </div>
        </Layout>
    )
}

export default Sobre
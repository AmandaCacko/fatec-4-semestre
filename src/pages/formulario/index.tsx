import { Link } from "react-router-dom"
import Form from "../../components/form"

function Formulario(){
    return (
        <div>
            <Form></Form>
            <Link to='/'>Voltar para Home</Link>
        </div>
    )
}

export default Formulario
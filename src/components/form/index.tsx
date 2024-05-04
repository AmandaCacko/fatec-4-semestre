import styles from './Form.module.css'
import Input from '../input-fatec'
import Button from '../button-fatec'

function Form() {
    return (
        <form className={styles.form}>
            <Input type="text" label="Nome" placeholder="Digite seu nome" />
            <Input type="email" label="E-mail" placeholder="Digite seu e-mail" />
            <Input type="text" label="Telefone" placeholder="Digite seu telefone" mask="(00) 00000-0000" />
            <Button type='submit' label='Enviar'/>
        </form>
    )
}

export default Form

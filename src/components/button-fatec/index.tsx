import { Button } from '@chakra-ui/react'
//import './ButtonFatec.css' //className = 'botao-fatec'
//import styles from './ButtonFatec.module.css' // styles.botaoFatec

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({type, label}: Props){
    return(
        <Button type={type} colorScheme='red' size='lg' textColor='white'>
            {label}
        </Button>
    )
}

export default ButtonFatec
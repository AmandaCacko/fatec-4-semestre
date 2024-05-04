import { Button, Checkbox, Flex, Input } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import api from "../../../helpers/axios"

interface FormTarefaProps {
    carregarLista(): void
}

function FormTarefa({ carregarLista }: FormTarefaProps) {
    const [nomeTarefa, setNomeTarefa] = useState('')
    const [realizadaTarefa, setRealizadaTarefa] = useState(false)

    function adicionarTarefa() {
        if (nomeTarefa != '') {
            const novaTarefa = {
                title: nomeTarefa,
                completed: realizadaTarefa
            }
            api.post('/task', novaTarefa)
                .then(() => {
                    setNomeTarefa('')
                    carregarLista()
                })
        }
    }

    const inputTarefa = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if (inputTarefa.current) inputTarefa.current.focus()
    }, [])

    return (
        <Flex alignItems='center' justifyContent='space-around'>
            <Input
            ref={inputTarefa}
            value={nomeTarefa}
            onChange={(evento) => setNomeTarefa(evento.target.value)}
            placeholder="Título da tarefa" 
            size='md' />
            <Checkbox onChange={(evento) => setRealizadaTarefa(evento.target.checked)}>Realizado?</Checkbox>
            <Button onClick={adicionarTarefa} colorScheme="blue">Adicionar</Button>
        </Flex>
    )
}

export default FormTarefa
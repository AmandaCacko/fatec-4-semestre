import { Box, Button, Grid } from "@chakra-ui/react"
import { Tarefa } from "../../../interfaces/tarefas"

interface ItemTarefaProps {
    tarefa: Tarefa
    apagarTarefa(id: number): void
    alterarStatus(tarefa: Tarefa): void
}

function ItemTarefa({ tarefa, apagarTarefa, alterarStatus }: ItemTarefaProps) {
    return (
        <Grid templateColumns='3fr 1fr' p={5} backgroundColor='lightgray' my={3}>
            <Box>
                {tarefa.id} - {tarefa.title}
            </Box>
            <Box>
                <Button mr={5}
                    onClick={() => alterarStatus(tarefa)}
                    colorScheme={tarefa.completed ? 'green' : 'orange'}>
                    {tarefa.completed ? 'Finalizada' : 'Pendente'}
                </Button>
                <Button onClick={() => apagarTarefa(tarefa.id)}
                    colorScheme='red'>Remover</Button>
            </Box>
        </Grid>
    )
}

export default ItemTarefa
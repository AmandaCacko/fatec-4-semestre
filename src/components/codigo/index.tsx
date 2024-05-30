import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import api from '../../helpers/axios';

function Codigo() {
    const [formData, setFormData] = useState({
        tipo: '',
        nome: '',
        dataInicio: '',
        dataFim: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token de autenticação não encontrado');
            }
    
            const response = await api.post('/codigo', formData, {
                headers: {
                    Authorization: `Bearer ${token}` // Ensure the token is prefixed with 'Bearer '
                }
            });
            setMessage('Processo criado com sucesso!');
            setFormData({
                tipo: '',
                nome: '',
                dataInicio: '',
                dataFim: ''
            });
        } catch (error: any) {
            console.error('Erro ao criar processo:', error);
            if (error.response && error.response.data && error.response.data.error === 'Token inválido') {
                setMessage('Sua sessão expirou. Por favor, faça login novamente.');
            } else if (error.response && error.response.data && error.response.data.error) {
                setMessage(`Erro ao criar processo: ${error.response.data.error}`);
            } else {
                setMessage('Erro desconhecido ao criar processo');
            }
        }
    };
    
    
    return (
        <Flex
            padding={7}
            bg={useColorModeValue('#CDDECA', 'gray.900')}
            align="center"
            justify="center"
            id="contact">
            <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={20}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                    {message && (
                        <p>{message}</p>
                    )}
                    <FormControl isRequired>
                        <FormLabel>Tipo de equipamento</FormLabel>
                        <InputGroup>
                            <Input
                                htmlSize={35}
                                type="text"
                                name="tipo"
                                placeholder="Selecione o tipo de equipamento"
                                value={formData.tipo}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Nome do equipamento</FormLabel>
                        <InputGroup>
                            <Input
                                type="text"
                                name="nome"
                                placeholder="Selecione o nome do equipamento"
                                value={formData.nome}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Data de início de expedição</FormLabel>
                        <InputGroup>
                            <Input
                                type="date"
                                name="dataInicio"
                                placeholder="00/00/0000"
                                value={formData.dataInicio}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Data prevista para entrega</FormLabel>
                        <InputGroup>
                            <Input
                                type="date"
                                name="dataFim"
                                placeholder="00/00/0000"
                                value={formData.dataFim}
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </FormControl>
                    <Button 
                        colorScheme="blue"
                        bg="#377C2B"
                        color="white"
                        width={350}
                        _hover={{ bg: '#377C2B' }}
                        onClick={handleSubmit}
                    >
                        Criar
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
}

export default Codigo;

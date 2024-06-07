import { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    Heading,
    Input,
    InputGroup,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Stack,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import api from '../../helpers/axios';
import { Link } from 'react-router-dom';


function AtribuirEtapas() {
    const [isFormAccessible, setIsFormAccessible] = useState(false);
    const [codigoId, setCodigoId] = useState('');
    const [formData, setFormData] = useState({
        centro: '0',
        concessionaria: '0',
        cliente: '0'
    });
    const [message, setMessage] = useState('');
    const [totals, setTotals] = useState({
        total: 0,
        subirCarga: 0,
        descerCarga: 0
    });

    const handleSearch = async () => {
        try {
            const response = await api().get(`/etapa1/${codigoId}`);
            if (response.data) {
                setIsFormAccessible(true);
                setMessage('');
                setFormData(response.data);
            }
        } catch (error) {
            setMessage('Código inexistente ou erro de autenticação');
            setIsFormAccessible(false);
            setFormData({
                centro: '',
                concessionaria: '',
                cliente: ''
            });
        }
    };

    const handleNumberInputChange = (valueString: string, name: string) => {
        setFormData({ ...formData, [name]: valueString });
    };

    useEffect(() => {
        const centro = parseInt(formData.centro) || 0;
        const concessionaria = (parseInt(formData.concessionaria) || 0) * 2;
        const cliente = parseInt(formData.cliente) || 0;
        const total = centro + concessionaria + cliente;
        const subirCarga = Math.floor(total / 2);
        const descerCarga = total - subirCarga;
        setTotals({ total, subirCarga, descerCarga });
    }, [formData]);

    const handleSubmit = async () => {
        try {
            await api().post('/etapa1', { ...formData, codigoId });
            setMessage('Processo atualizado com sucesso');
        } catch (error) {
            setMessage('Erro ao atualizar processo ou erro de autenticação');
        }
    };

    return (
        <Flex
            bg={useColorModeValue('#CDDECA', 'gray.900')}
            align="center"
            justify="center"
            id="contact"
        >
            <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={5}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
            >
                <VStack spacing={2}>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} textAlign={'left'}>
                        Código do processo
                    </Heading>
                    <Flex flexDirection={"row"}>
                        <FormControl isRequired>
                            <InputGroup>
                                <Input
                                    htmlSize={35}
                                    type="text"
                                    name="codigoId"
                                    width={'650px'}
                                    value={codigoId}
                                    onChange={(e) => setCodigoId(e.target.value)}
                                />
                            </InputGroup>
                        </FormControl>
                        <Button
                            w={'auto'}
                            bg={useColorModeValue('#377C2B', 'green.900')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            marginLeft='20px'
                            onClick={handleSearch}
                        >
                            Buscar
                        </Button>
                    </Flex>
                    {message && <Text color="red.500">{message}</Text>}
                    <Flex flexDirection={"row"}>
                        <Flex flexDirection={'row'} padding={2}>
                            <Box
                                maxW={'270px'}
                                w={'full'}
                                bg={useColorModeValue('white', 'gray.800')}
                                borderWidth="1px"
                                borderStyle="solid"
                                borderColor="#ffe01a"
                                boxShadow={'2xl'}
                                rounded={'24'}
                                overflow={'hidden'}
                                opacity={isFormAccessible ? 1 : 0.5}
                                pointerEvents={isFormAccessible ? 'auto' : 'none'}
                            >
                                <Box p={4}>
                                    <Stack spacing={0} align={'center'} mb={5}>
                                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                            Quantidade de viagens
                                        </Heading>
                                    </Stack>
                                    <Stack spacing={0} align={'left'} mb={5}>
                                        <Flex flexDirection={"row"}>
                                            <NumberInput
                                                w={'120px'}
                                                value={formData.centro}
                                                onChange={(valueString) => handleNumberInputChange(valueString, 'centro')}
                                            >
                                                <NumberInputField name="centro" />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                            <Text color={'gray.500'} marginLeft='10px' height='5px' marginTop='5px'>Centro de distribuição</Text>
                                        </Flex>
                                    </Stack>
                                    <Stack spacing={0} align={'left'} mb={5}>
                                        <Flex flexDirection={"row"}>
                                            <NumberInput
                                                w={'90px'}
                                                value={formData.concessionaria}
                                                onChange={(valueString) => handleNumberInputChange(valueString, 'concessionaria')}
                                            >
                                                <NumberInputField name="concessionaria" />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                            <Text color={'gray.500'} marginLeft='10px' height='5px' marginTop='5px'>Concessionária</Text>
                                        </Flex>
                                    </Stack>
                                    <Stack spacing={0} align={'left'} mb={5}>
                                        <Flex flexDirection={"row"}>
                                            <NumberInput
                                                w={'90px'}
                                                value={formData.cliente}
                                                onChange={(valueString) => handleNumberInputChange(valueString, 'cliente')}
                                            >
                                                <NumberInputField name="cliente" />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                            <Text color={'gray.500'} marginLeft='10px' height='5px' marginTop='5px'>Cliente</Text>
                                        </Flex>
                                    </Stack>
                                    <Stack spacing={0} align={'center'} mb={5}>
                                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                            Total: {totals.total}
                                        </Heading>
                                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                            Subir carga: {totals.subirCarga}
                                        </Heading>
                                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                            Descer carga: {totals.descerCarga}
                                        </Heading>
                                    </Stack>
                                    <Button
                                        w={'full'}
                                        mt={8}
                                        bg={useColorModeValue('#377C2B', 'green.900')}
                                        color={'white'}
                                        rounded={'md'}
                                        _hover={{
                                            transform: 'translateY(-2px)',
                                            boxShadow: 'lg',
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        Acessar
                                    </Button>
                                </Box>
                            </Box>
                        </Flex>
                        <Link to="/etapa2">
                            <Flex flexDirection={'row'} padding={2} width={'auto'}>
                                <Box
                                    maxW={'270px'}
                                    w={'full'}
                                    bg={useColorModeValue('white', 'gray.800')}
                                    borderWidth="1px"
                                    borderStyle="solid"
                                    borderColor="#ffe01a"
                                    boxShadow={'2xl'}
                                    rounded={'24'}
                                    overflow={'hidden'}
                                    opacity={isFormAccessible ? 1 : 0.5}
                                    pointerEvents={isFormAccessible ? 'auto' : 'none'}
                                >
                                    <Box p={6}>
                                        <Stack spacing={0} align={'center'} mb={5}>
                                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                                Atribuir relatório
                                            </Heading>
                                        </Stack>
                                        <Stack spacing={0} align={'center'} mb={5}>
                                            <Button
                                                rightIcon={<ArrowForwardIcon />}
                                                w={'full'}
                                                mt={8}
                                                bg={useColorModeValue('#377C2B', 'green.900')}
                                                color={'white'}
                                                rounded={'md'}
                                                _hover={{
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: 'lg',
                                                }}
                                            >
                                                Centro de distribuição
                                            </Button>
                                        </Stack>
                                        <Stack spacing={0} align={'center'} mb={5}>
                                            <Button
                                                rightIcon={<ArrowForwardIcon />}
                                                w={'full'}
                                                mt={8}
                                                bg={useColorModeValue('#377C2B', 'green.900')}
                                                color={'white'}
                                                rounded={'md'}
                                                _hover={{
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: 'lg',
                                                }}
                                            >
                                                Concessionária
                                            </Button>
                                        </Stack>
                                        <Stack spacing={0} align={'center'} mb={5}>
                                            <Button
                                                rightIcon={<ArrowForwardIcon />}
                                                w={'full'}
                                                mt={8}
                                                bg={useColorModeValue('#377C2B', 'green.900')}
                                                color={'white'}
                                                rounded={'md'}
                                                _hover={{
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: 'lg',
                                                }}
                                            >
                                                Cliente
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Flex>
                        </Link>
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    );
}

export default AtribuirEtapas;

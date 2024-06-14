import React, { useState, useEffect } from 'react'
import {
    Heading,
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Input from '../../components/input-login'
import api from '../../helpers/axios'

interface ProcessData {
    codigoProcesso: number
    responsavel: string
    etapa: string
    progresso: number
}

function LargeCard() {
    const [data, setData] = useState<ProcessData[]>([])
    const [codigoProcesso, setCodigoProcesso] = useState<number | string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await api().get<ProcessData[]>(`/home`)
            setData(response.data)
            setError(null)
        } catch (error) {
            console.error('Error fetching data:', error)
            setError('Não foi possível encontrar o processo.')
        } finally {
            setLoading(false)
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCodigoProcesso(e.target.value)
    };

    const handleSearch = () => {
        if (codigoProcesso !== '') {
            fetchData();
        }
    };

    useEffect(() => {
        setData([])
        setError(null)
    }, [codigoProcesso])

    return (
        <Flex padding={10} justifyContent="center">
            <Box
                maxW={'950px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'24'}
                overflow={'hidden'}
                p={8}
                position="relative"
            >
                <Flex alignItems="center" mb={4}>
                    <Input
                        type='text'
                        label='Código do processo'
                        value={codigoProcesso}
                        onChange={handleInputChange}
                    />
                    <Button
                        ml={4}
                        bg={useColorModeValue('#377C2B', 'green.900')}
                        color={'white'}
                        rounded={'md'}
                        onClick={handleSearch}
                        disabled={!codigoProcesso || loading}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                        p={4}
                        fontSize={'md'}
                        px={8}
                    >
                        Buscar
                    </Button>
                </Flex>

                {loading && <Text>Loading...</Text>}

                {error && <Text color="red.500">{error}</Text>}

                {!loading && !error && data.length > 0 && (
                    <>
                        {data.slice(0, 3).map((item, index) => (
                            <Box key={index} p={4}>
                                <Flex alignItems="center" justifyContent="space-between" mb={4}>
                                    <Box
                                        borderWidth="2px"
                                        border="1px"
                                        borderColor="black.300"
                                        borderRadius="md"
                                        p={4}
                                        boxShadow="lg"
                                        bg="white"
                                        flex="1"
                                    >
                                        <Stack spacing={4} align={'left'} mb={4}>
                                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                                Código
                                            </Heading>
                                            <Text fontSize={'md'} color={'gray.500'}>{item.codigoProcesso}</Text>
                                        </Stack>

                                        <Stack spacing={4} align={'left'} mb={4}>
                                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                                Responsável
                                            </Heading>
                                            <Text fontSize={'md'} color={'gray.500'}>{item.responsavel}</Text>
                                        </Stack>

                                        <Stack spacing={4} align={'left'} mb={4}>
                                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                                Etapa atual
                                            </Heading>
                                            <Text fontSize={'md'} color={'gray.500'}>{item.etapa}</Text>
                                        </Stack>

                                        <Stack spacing={4} align={'left'} mb={4}>
                                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                                Progresso
                                            </Heading>
                                            <Text fontSize={'md'} color={'gray.500'}>{item.progresso * 10}%</Text>
                                        </Stack>
                                        <Stack direction="column" alignItems="center">
                                            <Text fontSize="md" fontWeight="bold" mb={2}>Responder Formulário</Text>
                                            <Link to={`/checklist-${item.progresso}`} style={{ textDecoration: 'none' }}>
                                                <Button
                                                    w={'full'}
                                                    mt={8}
                                                    bg={useColorModeValue('#377C2B', 'green.900')}
                                                    color={'white'}
                                                    rounded={'md'}
                                                    _hover={{
                                                        transform: 'translateY(-2px)',
                                                        boxShadow: 'lg',
                                                    }}>
                                                    Acessar Checklist
                                                </Button>
                                            </Link>
                                        </Stack>
                                    </Box>
                                </Flex>
                            </Box>
                        ))}
                    </>
                )}

                {!loading && !error && data.length === 0 && (
                    <Text>Nenhum processo encontrado.</Text>
                )}

            </Box>
        </Flex>
    );
}

export default LargeCard;

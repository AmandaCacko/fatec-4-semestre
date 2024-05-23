import {
    Heading,
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import Input from "../../components/input-login";
import { ReactNode } from "react";


function Formulario() {
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
            position="relative" // Adicionando position relative para o Box
        >
            <Box p={4}>
                <Flex alignItems="center" mb={4}>
                    <Input type='text' label='Código do processo' />
                    <Button
                        ml={4}
                        bg={useColorModeValue('#377C2B', 'green.900')}
                        color={'white'}
                        rounded={'md'}
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
                            <Text fontSize={'md'} color={'gray.500'}>XXXX</Text>
                        </Stack>

                        <Stack spacing={4} align={'left'} mb={4}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                Responsável
                            </Heading>
                            <Text fontSize={'md'} color={'gray.500'}>Fulano</Text>
                        </Stack>

                        <Stack spacing={4} align={'left'} mb={4}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                Etapa atual
                            </Heading>
                            <Text fontSize={'md'} color={'gray.500'}>Relatório - Chegada</Text>
                        </Stack>

                        <Stack spacing={4} align={'left'} mb={4}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                Progresso
                            </Heading>
                            <Text fontSize={'md'} color={'gray.500'}>55%</Text>
                        </Stack>
                    </Box>
                    
                </Flex>
            </Box>
        </Box>
    </Flex>
    )
}

export default Formulario;

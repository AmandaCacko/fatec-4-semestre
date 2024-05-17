import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    InputLeftElement,
    Link,
    Stack,
    Text,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,

} from '@chakra-ui/react';


function AtribuirEtapas() {

    
    
    return (
        <Flex padding={100}
            bg={useColorModeValue('#CDDECA', 'gray.900')}
            align="center"
            justify="center"
            id="contact"
            marginLeft='200px'>

            <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={5}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} textAlign={'left'}>
                     Codigo do processo 
                </Heading>
                <Flex flexDirection={"row"}>
                    <FormControl isRequired>                       
                        <InputGroup>
                         <Input htmlSize={35} type="text" name="name" width={'650px'} />
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
                            marginLeft='20px'>
                            Buscarr
                        </Button>
                </Flex>
                    <Flex flexDirection={"row"}>
                    <Flex flexDirection={'row'} padding={100}>
                <Box
                    maxW={'270px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'24'}
                    overflow={'hidden'}>

                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                Quantidade vantagens
                            </Heading>
                        </Stack>
                        
                        <Stack spacing={0} align={'center'} mb={5}>
                        <Flex flexDirection={"row"}>
                        <NumberInput>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                            <Text color={'gray.500'} marginLeft='10px' height='5px'>Centro de distribuição</Text>
                            </Flex>
                        </Stack>
                        

                        <Stack spacing={0} align={'center'} mb={5}>
                        <Flex flexDirection={"row"}>
                        <NumberInput>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                            <Text color={'gray.500'} marginLeft='10px' height='5px'>Concessionária</Text>
                        </Flex>
                        </Stack>

                        <Stack spacing={0} align={'center'} mb={5}>
                        <Flex flexDirection={"row"}>
                        <NumberInput>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                            <Text color={'gray.500'} marginLeft='10px' height='5px'>Cliente</Text>
                        </Flex>
                        </Stack>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                Total: 5
                            </Heading>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                Subir carga: 2
                            </Heading>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                Descer carga: 3
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
                            }}>
                            Acessar
                        </Button>
                    </Box>
                </Box>
            </Flex>
            <Flex flexDirection={'row'} padding={100} width={'auto'}>
                <Box
                    maxW={'270px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'24'}
                    overflow={'hidden'}>

                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                Atribuir relatório
                            </Heading>
                        </Stack>

                        <Stack spacing={0} align={'center'} mb={5}>
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
                            Contro de distribuição →
                        </Button>
                        </Stack>

                        <Stack spacing={0} align={'center'} mb={5}>
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
                            Concessionária →
                        </Button>
                        </Stack>

                        <Stack spacing={5} align={'center'} mb={5}>
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
                            Cliente →
                        </Button>
                        </Stack>
                    </Box>
                </Box>
            </Flex>
                    </Flex>
                    
                    <Button
                            w={'800px'}
                            mt={8}
                            bg={useColorModeValue('#377C2B', 'green.900')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}>
                            Atualizar
                        </Button>
                </VStack>
            </Box>
        </Flex>
    );

    
}

export default AtribuirEtapas
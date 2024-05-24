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
    Checkbox,

} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons'

function AtribuirEtapas() {

    const [isFormAccessible, setIsFormAccessible] = useState(false);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleSearch = () => {
        // Perform search logic here
        setSearchPerformed(true);
        setIsFormAccessible(true);
      };
    
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
                            marginLeft='20px'
                            onClick={handleSearch}>
                            Buscar
                        </Button>
                </Flex>
                    <Flex flexDirection={"row"}>
                    <Flex flexDirection={'row'} padding={10}>
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
                    pointerEvents={isFormAccessible ? 'auto' : 'none'}>

                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                Quantidade de viagens
                            </Heading>
                        </Stack>
                        
                        <Stack spacing={0} align={'left'} mb={5}>
                        <Flex flexDirection={"row"}>
                        <NumberInput w={'120px'}>
                            <NumberInputField />
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
                        <NumberInput w={'90px'}>
                            <NumberInputField />
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
                        <NumberInput w={'90px'} >
                            <NumberInputField />
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
            <Flex flexDirection={'row'} padding={10} width={'auto'}>
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
                    pointerEvents={isFormAccessible ? 'auto' : 'none'}>

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
                            w={'full'}
                            mt={8}
                            bg={useColorModeValue('#377C2B', 'green.900')}
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            rightIcon={<ArrowForwardIcon />}>
                            Concessionária
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
                            }}
                            rightIcon={<ArrowForwardIcon />}>
                            Cliente
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
                            }}
                            opacity={isFormAccessible ? 1 : 0.5}
                            >
                            Atualizar
                        </Button>
                </VStack>
            </Box>
        </Flex>
    );

    
}

export default AtribuirEtapas
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


function InserirCodigo() {

    
    
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
                    ← Centro de distribuição 
                </Heading>
                <Flex flexDirection={"row"}>
                    <FormControl isRequired>                       
                    <FormLabel>Nome ou Código do funcionário</FormLabel>
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
                            marginTop='30px'>
                            Buscar
                        </Button>
                </Flex>

                <Flex flexDirection={'row'} padding={100} width={'500px'}>
                <Box
                    maxW={'270px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'24'}
                    overflow={'hidden'}>

                    <Box p={6}>

                        <Stack spacing={0} align={'center'} mb={5}>
                        <Checkbox colorScheme='green' defaultChecked>
                            Fora do caminhão
                        </Checkbox>
                        </Stack>
                        <Stack spacing={0} align={'center'} mb={5}>
                        <Checkbox colorScheme='green' defaultChecked>
                            Dentro do caminhão
                        </Checkbox>
                        </Stack>

                    
                    </Box>
                </Box>
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

export default InserirCodigo
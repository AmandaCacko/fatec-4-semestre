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
import { ArrowBackIcon } from '@chakra-ui/icons'


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
                p={10}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={0} >
                
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} marginBottom={'50px'}  textAlign={'left'}>
                <IconButton
                variant='outline'
                colorScheme='#00000'
                aria-label='Call Sage'
                fontSize={'2xl'}
                marginRight={'10px'}
                icon={<ArrowBackIcon />}
/>
                    Centro de distribuição 
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

                <Flex flexDirection={'row'} padding={'50px'} width={'850px'} height={'500px'} >
                <Box
                    maxW={'1000'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    borderWidth="1px" 
                    borderStyle="solid" 
                    borderColor="#ffe01a"
                    boxShadow={'2xl'}
                    rounded={'24'}
                    overflow={'hidden'}>

                    <Box p={10}>

                        <Stack spacing={0} align={'center'} mb={5}>
                        <Checkbox colorScheme='green' 
                         maxW={'1000px'}
                         w={'full'}
                         bg={useColorModeValue('white', 'gray.800')}
                         borderWidth="1px" 
                         borderStyle="solid" 
                         borderColor="#979797"
                         boxShadow={'1xl'}
                         rounded={'md'}
                         overflow={'hidden'}
                         padding={1.5}>
                            Fora do caminhão
                        </Checkbox>
                        </Stack>
                        <Stack spacing={0} align={'center'} mb={5}>
                        <Checkbox colorScheme='green' 
                        maxW={'1000px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        borderWidth="1px" 
                        borderStyle="solid" 
                        borderColor="#979797"
                        boxShadow={'1xl'}
                        rounded={'md'}
                        overflow={'hidden'}
                        padding={1.5}>
                            Dentro do caminhão
                        </Checkbox>
                        </Stack>

                    
                    </Box>
                </Box>
            </Flex>
                   
                    
                    <Button
                            w={'750px'}
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
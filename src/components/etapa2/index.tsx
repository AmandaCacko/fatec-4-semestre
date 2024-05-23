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
    Stack,
    useColorModeValue,
    VStack,
    Checkbox,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Spacer,
    useDisclosure,

} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'
import React from 'react';

function InserirCodigo() {

    const {
        isOpen: isOpenBuscar,
        onOpen: onOpenBuscar,
        onClose: onCloseBuscar,
      } = useDisclosure();
      const {
        isOpen: isOpenAtribuir,
        onOpen: onOpenAtribuir,
        onClose: onCloseAtribuir,
      } = useDisclosure();
    const cancelRef = React.useRef<HTMLButtonElement>(null);
    
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
                            marginTop='30px'
                            onClick={onOpenBuscar}>
                            Buscar
                        </Button>
                        <AlertDialog
                            motionPreset='slideInBottom'
                            leastDestructiveRef={cancelRef}
                            onClose={onCloseBuscar}
                            isOpen={isOpenBuscar}
                            isCentered
                        >
                            <AlertDialogOverlay />

                            <AlertDialogContent>
                            <AlertDialogHeader>Código não encontrado</AlertDialogHeader>
                            <AlertDialogCloseButton />
                            <AlertDialogBody>
                                O código XXXXXXX não existe
                            </AlertDialogBody>
                            <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onCloseBuscar}>
                            Criar código
                            </Button>
                            </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
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
                            }}
                            onClick={onOpenAtribuir}>
                            Atualizar
                        </Button>
                        <AlertDialog
                            motionPreset='slideInBottom'
                            leastDestructiveRef={cancelRef}
                            onClose={onCloseAtribuir}
                            isOpen={isOpenAtribuir}
                            isCentered
                        >
                            <AlertDialogOverlay />

                            <AlertDialogContent>
                            <AlertDialogHeader>Tarefa atribuída com sucesso!</AlertDialogHeader>
                            <AlertDialogCloseButton />
                            <AlertDialogBody>
                                Nome do Funcionário - XXXXXXX
                                <Spacer />
                                Formulários Atribuidos:
                                <Spacer />
                                    • Centro de Distribuição - Dentro do caminhão
                                <Spacer />
                                    • Centro de Distribuição - Fora do caminhão
                            </AlertDialogBody>
                            <AlertDialogFooter>
                            </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                </VStack>
            </Box>
        </Flex>
    );

    
}

export default InserirCodigo
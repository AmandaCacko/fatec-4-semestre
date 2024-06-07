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
    Text 
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../helpers/axios';

function AtribuirFuncionario() {
    const { isOpen: isOpenBuscar, onOpen: onOpenBuscar, onClose: onCloseBuscar } = useDisclosure();
    const { isOpen: isOpenAtribuir, onOpen: onOpenAtribuir, onClose: onCloseAtribuir } = useDisclosure();
    const cancelRef = React.useRef<HTMLButtonElement>(null);

    const location = useLocation();
    const navigate = useNavigate(); 
    const { title, codigoId } = location.state || {};
    const [formData, setFormData] = useState({ funcionario: '' });
    const [message, setMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            await api().post(`/etapa2`, {
                title,
                codigoId,
                funcionario: formData.funcionario,
            });
            onOpenAtribuir();
        } catch (error) {
            setMessage('Erro ao atualizar a tarefa');
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
                p={10}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base"
            >
                <VStack spacing={0}>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} marginBottom={'20px'} textAlign={'left'}>
                        <IconButton
                            variant='outline'
                            colorScheme='#00000'
                            aria-label='Call Sage'
                            fontSize={'2xl'}
                            marginRight={'10px'}
                            icon={<ArrowBackIcon />}
                            onClick={() => navigate(-1)}
                        />
                        {title}
                    </Heading>
                    <Flex flexDirection={"row"}>
                        <FormControl isRequired>
                            <FormLabel>Nome ou Código do funcionário</FormLabel>
                            <InputGroup>
                                <Input
                                    htmlSize={35}
                                    type="text"
                                    name="funcionario"
                                    width={'650px'}
                                    value={formData.funcionario}
                                    onChange={handleInputChange}
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
                            marginTop='30px'
                            onClick={onOpenBuscar}
                        >
                            Buscar
                        </Button>

                    </Flex>

                    <Flex flexDirection={'row'} padding={'50px'} width={'850px'} height={'auto'}>
                        <Box
                            maxW={'1000'}
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.800')}
                            borderWidth="1px"
                            borderStyle="solid"
                            borderColor="#ffe01a"
                            boxShadow={'2xl'}
                            rounded={'24'}
                            overflow={'hidden'}
                        >
                            <Box p={30}>
                                <Stack spacing={0} align={'center'} mb={5}>
                                    <Checkbox
                                        colorScheme='green'
                                        maxW={'1000px'}
                                        w={'full'}
                                        bg={useColorModeValue('white', 'gray.800')}
                                        borderWidth="1px"
                                        borderStyle="solid"
                                        borderColor="#979797"
                                        boxShadow={'1xl'}
                                        rounded={'md'}
                                        overflow={'hidden'}
                                        padding={1.5}
                                    >
                                        Fora do caminhão
                                    </Checkbox>
                                </Stack>
                                <Stack spacing={0} align={'center'} mb={5}>
                                    <Checkbox
                                        colorScheme='green'
                                        maxW={'1000px'}
                                        w={'full'}
                                        bg={useColorModeValue('white', 'gray.800')}
                                        borderWidth="1px"
                                        borderStyle="solid"
                                        borderColor="#979797"
                                        boxShadow={'1xl'}
                                        rounded={'md'}
                                        overflow={'hidden'}
                                        padding={1.5}
                                    >
                                        Dentro do caminhão
                                    </Checkbox>
                                </Stack>
                            </Box>
                        </Box>
                    </Flex>

                    <Button
                        w={'750px'}
                        bg={useColorModeValue('#377C2B', 'green.900')}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}
                        onClick={handleUpdate}
                    >
                        Atualizar
                    </Button>
                    {message && <Text color="red.500">{message}</Text>}
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
                                • {title} - Dentro do caminhão
                                <Spacer />
                                • {title} - Fora do caminhão
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

export default AtribuirFuncionario;
import {
    Heading,
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Progress,
    Image,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Input from "../../components/input-login";
import qrcodeImage from "../../assets/qrcode.png";

import api from '../../helpers/axios'
import { useEffect, useState } from 'react'

interface ProcessData {
    codigoProcesso: number
    responsavel: string
    etapa: string
    progresso: number
  }



function LargeCard() {
    const [data, setData] = useState<ProcessData[]>([])
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api().get<ProcessData[]>('/home')
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
  
      fetchData();
    }, [])
  
    if (data.length === 0) {
      return <Text>Loading...</Text>;
    }



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
                {data.slice(0, 3).map((item, index) => (
                    <Box key={index} p={4}>
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
                                    <Text fontSize={'md'} color={'gray.500'}>{item.progresso}%</Text>
                                </Stack>
                            </Box>
    
                            <Box position="absolute" top="50%" right="40" transform="translateY(-50%)">
                                <Stack direction="column" alignItems="center">
                                    <Link to={'/checklist'} style={{ textDecoration: 'none' }}>
                                        <Text fontSize="md" fontWeight="bold" mb={2}>Responder Formulário</Text>
                                    </Link>
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
                                </Stack>
                            </Box>
                        </Flex>
                    </Box>
                ))}
            </Box>
        </Flex>
    );
    
}

export default LargeCard;

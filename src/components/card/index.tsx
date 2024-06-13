import {
    Heading,
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Progress,
} from '@chakra-ui/react'

import api from '../../helpers/axios'
import { useEffect, useState } from 'react'

interface ProcessData {
    codigoProcesso: number
    responsavel: string
    etapa: string
    progresso: number
  }

function Card() {
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
        <Flex padding={5}>
         {data.slice(0, 3).map((item) => (
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
                Código do processo
              </Heading>
              <Text color={'gray.500'}>{item.codigoProcesso}</Text>
            </Stack>
  
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Responsável
              </Heading>
              <Text color={'gray.500'}>{item.responsavel}</Text>
            </Stack>
  
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Etapa a ser realizada:
              </Heading>
              <Text color={'gray.500'}>{item.etapa}</Text>
            </Stack>
  
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Progresso atual: {item.progresso}%
                <Progress marginTop={2} rounded={7} value={item.progresso} />
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
         ))}
      </Flex>
    )
  }
  
  export default Card;


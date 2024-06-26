import { Link } from "react-router-dom";
import Layout from "../../components/layout"

import {
  Heading,
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

function Formcheck3() {
    return (
      <Layout>
        <Flex padding={10} justifyContent="center">
          <Box
            maxW={'550px'}
            w={'full'}
            
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'24'}
            overflow={'hidden'}
            p={8}
            position="relative"
          >
            <Box p={4}>
              <Flex direction="column" alignItems="center" mb={4}>
                <Box
                  borderWidth="2px"
                  minH={'600px'}
                  border="1px"
                  borderColor="black.300"
                  borderRadius="md"
                  p={24}
                  boxShadow="lg"
                  bg="white"
                  w="full"
                >
                  <Stack spacing={4} align={'center'} mb={4}>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                      Lado Esquerdo
                    </Heading>
                    <Text fontSize={'md'} color={'gray.500'}></Text>
                  </Stack>

                  <Stack spacing={4} align={'center'} mb={4}>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                      INSTRUÇÕES:
                    </Heading>
                    <Text fontSize={'md'} color={'black.500'} align={"center"}>
                      Se posicione do lado direito da máquina, de forma que toda a lateral direita fique visível a câmera
                    </Text>
                  </Stack>

                  <Stack spacing={4} align={'center'} mt={4}>
                  <Link to={'/checklist-6'} style={{ textDecoration: 'none' }}>
                    <Button
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
                      w="350px"
                    >
                      TIRAR FOTO
                    </Button>
                    </Link>
                    <Button
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
                      w="350px"
                    >
                      ESCOLHER DA GALERIA
                    </Button>
                  </Stack>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Layout>
    )
}

export default Formcheck3;

import Layout from "../../components/layout"

import {
  Heading,
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Image,
  Center,
} from '@chakra-ui/react';
import minhaImagem from '/src/img/imagem-612x612.jpg';
import { Link } from "react-router-dom";

function Formcheck7() {
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
                      Frente
                    </Heading>
                    <Text fontSize={'md'} color={'gray.500'}></Text>
                  </Stack>
                  <Center>
                  <Image
                      boxSize="200px" 
                      objectFit="cover"
                      src={minhaImagem}
                      alt="Descrição da imagem"
                    />
                    </Center>
                  <Stack spacing={4} align={'center'} mb={4}>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                      
                    </Heading>
                    <Text fontSize={'md'} color={'black.500'} align={"center"}>
                    Você confirma que as fotos inseridas são da parte lateral e estão nitídas?
                    </Text>
                  </Stack>

                  <Stack spacing={4} align={'center'} mt={4}>
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
                      TIRAR FOTO NOVAMENTE
                    </Button>
                    <Link to={'/checklistfim'} style={{ textDecoration: 'none' }}>
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
                      CONFIRMAR
                    </Button>
                    </Link>
                  </Stack>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Layout>
    )
}

export default Formcheck7;

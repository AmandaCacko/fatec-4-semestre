import Layout from "../../components/layout"
import Formulario from "../../components/checklist"
import Card from "../../components/card";

import {
  Heading,
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import Input from "../../components/input-login";

function Formcheckfimnao() {
    return (
      <Layout>
        <Flex 
            align="center" 
            justify="center" 
            minHeight="100vh"
        >
        <Box maxW={'350px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'24'}
            overflow={'hidden'}
            p={8}
            position="relative" // Adicionando position relative para o Box
            minHeight="600px"
            >
         <Stack spacing={4} align={'center'} mb={4}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                CHECKLIST
                            </Heading>
                            <Text fontSize={'md'} color={'gray.500'}></Text>
                        </Stack>
        <h1>1. O equipamento apresenta alguma avaria?</h1>
        
        <Stack direction="row" spacing={4} mt={8}>
              <Button colorScheme="teal" variant="outline">
                <HStack>
                  <Box 
                    width="12px" 
                    height="12px" 
                    borderWidth="1px" 
                    borderRadius="50%" 
                    display="inline-block"
                    borderColor="gray.500"
                  />
                  <Text>Sim</Text>
                </HStack>
              </Button>
              <Spacer />
              <Button colorScheme="green" variant="solid">
                <HStack>
                  <Box 
                    width="12px" 
                    height="12px" 
                    borderWidth="1px" 
                    borderRadius="50%" 
                    display="inline-block"
                    borderColor="gray.500"
                    color={"black"}
                  />
                  <Text>Não</Text>
                </HStack>
              </Button>
            </Stack>
            <Button colorScheme="green" variant="solid" width="full" mt={4}>
              Confirmar
            </Button>
        </Box>
        </Flex>
      </Layout>
    )
}

export default Formcheckfimnao;

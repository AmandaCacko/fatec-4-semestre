import Layout from "../../components/layout"
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';

function ChecklistStart() {
    return (
      <Layout>
        <Flex 
          align="center" 
          justify="center" 
          minHeight="100vh" 
         
        >
          <Box 
            maxW={'350px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            overflow={'hidden'}
            p={8}
            textAlign="center"
          >
            <Stack spacing={4} align="center" mb={4}>
              <Image src="https://cdn.freebiesupply.com/logos/large/2x/john-deere-6-logo-png-transparent.png" alt="John Deere" boxSize="100px" />
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Olá User
              </Heading>
              <Text fontSize={'md'} color={'gray.500'}>
                Você está pronto(a) para realizar o checklist?
              </Text>
            </Stack>
            <Box mb={4}>
              <Text fontSize={'sm'} fontWeight="bold">CÓDIGO:</Text>
              <Text fontSize={'md'} color={'gray.500'}>XXXXXX</Text>
            </Box>
            <Box mb={8}>
              <Text fontSize={'sm'} fontWeight="bold">ETAPA ATUAL:</Text>
              <Text fontSize={'md'} color={'gray.500'}>
                Chegada no caminhão (Cliente)
              </Text>
            </Box>
            <Button colorScheme="green" variant="solid" width="full" mb={4}>
              ESTOU PRONTO
            </Button>
            <Button colorScheme="blackAlpha" variant="solid" width="full">
              SAIR
            </Button>
          </Box>
        </Flex>
      </Layout>
    )
}

export default ChecklistStart;

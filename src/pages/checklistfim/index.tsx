import React, { useState } from 'react'; 
import Layout from "../../components/layout";

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
  Select,
} from '@chakra-ui/react';

function Formcheckfim() {
  
  const [showDropdown, setShowDropdown] = useState(false);

  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Layout>
      <Flex align="center" justify="center" minHeight="100vh">
        <Box maxW={'350px'}
             w={'full'}
             bg={useColorModeValue('white', 'gray.800')}
             boxShadow={'2xl'}
             rounded={'24'}
             overflow={'hidden'}
             p={8}
             position="relative"
             minHeight="600px"
        >
          <Stack spacing={4} align={'left'} mb={4}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              CHECKLIST
            </Heading>
            <Text fontSize={'md'} color={'gray.500'}></Text>
          </Stack>
          <h1>1. O equipamento apresenta alguma avaria?</h1>
          <Stack direction="row" spacing={4} mt={8}>
            {}
            <Button colorScheme="green" variant="solid" onClick={toggleDropdown}>
              <HStack>
                <Box width="12px" height="12px" borderWidth="1px" borderRadius="50%" display="inline-block"  borderColor="gray.500"/>
                <Text>Sim</Text>
                <Spacer />
              </HStack>
            </Button>
            <Spacer />
            <Button colorScheme="green" variant="solid">
              <HStack>
                <Box width="12px" height="12px" borderWidth="1px" borderRadius="50%" display="inline-block" borderColor="gray.500"/>
                <Text>Não</Text>
              </HStack>
            </Button>
          </Stack>
          {}
          {showDropdown && (
            <Select placeholder="Selecione uma opção" mt={4} width="full">
              <option value="option1">Opção 1</option>
              <option value="option2">Opção 2</option>
              <option value="option3">Opção 3</option>
            </Select>
          )}
          <Button colorScheme="green" variant="solid" width="full" mt={4}>
            Confirmar
          </Button>
          
        </Box>
      </Flex>
    </Layout>
  );
}

export default Formcheckfim;
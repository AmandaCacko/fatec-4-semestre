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
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import React from 'react';

function Codigo() {


    return (
        <Flex padding={100}
            bg={useColorModeValue('#CDDECA', 'gray.900')}
            align="center"
            justify="center"
            id="contact">

            <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="lg"
                p={20}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="base">
                <VStack spacing={5}>
                    <FormControl isRequired>
                        <FormLabel>Tipo de equipamento</FormLabel>
                        <InputGroup>

                            <Input htmlSize={35} type="text" name="name" placeholder="Selecione o tipo de equipamento" />
                        </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Nome do equipamento</FormLabel>
                        <InputGroup>
                            <Input type="text" name="name" placeholder="Selecione o nome do equipamento" />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Data de início de expedição</FormLabel>
                        <InputGroup>
                            <Input type="text" name="name" placeholder="00/00/0000" />
                        </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Data prevista para entrega</FormLabel>
                        <InputGroup>
                            <Input type="text" name="name" placeholder="00/00/0000" />
                        </InputGroup>
                    </FormControl>
                    <Button 
                        colorScheme="blue"
                        bg="#377C2B"
                        color="white"
                        width={350}
                        _hover={{
                            bg: '#377C2B',
                        }}
                        >
                        Criar
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
}

export default Codigo
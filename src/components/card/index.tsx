import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Progress,
} from '@chakra-ui/react';

function Card() {
    return (
        <Flex padding={5}>
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
                        <Text color={'gray.500'}>xxxxx</Text>
                    </Stack>

                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            Responsável
                        </Heading>
                        <Text color={'gray.500'}>Fulano</Text>
                    </Stack>

                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            Etapa a ser realizada:
                        </Heading>
                        <Text color={'gray.500'}>Relatório - Chegada</Text>
                    </Stack>

                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            Progresso atual: 52%
                            <Progress marginTop={2} rounded={7} value={52} />
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
        </Flex>
    )

}

export default Card


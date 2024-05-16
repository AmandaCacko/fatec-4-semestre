import { Box, Flex, useColorModeValue } from '@chakra-ui/react';

interface CardBackgroundProps {
    children: React.ReactNode;
}

function CardBackground({ children }: CardBackgroundProps) {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            minHeight="90vh"
        >
            <Flex
                direction="column"
                alignItems="center" // Alinhe os itens verticalmente ao centro
            >
                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'xl'}
                    overflow={'hidden'}
                    padding={8}
                    textAlign="center"
                >
                    {children}
                </Box>
            </Flex>
        </Flex>
    );
}

export default CardBackground;

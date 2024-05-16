import { Button, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react'; // Importe o ReactNode do pacote react

interface CustomButtonProps {
    children: ReactNode;
    color: 'green' | 'black';
}

function CustomButton({ children, color }: CustomButtonProps) {
    const textColor = useColorModeValue('white', 'gray.800');

    return (
        <Button
            bg={color === 'green' ? '#377C2B' : 'black'}
            color={textColor}
            borderRadius="md"
            px="4"
            py="2"
            fontSize="md"
            fontWeight="semibold"
            width="100%"
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
        >
            {children}
        </Button>
    );
}

export default CustomButton;

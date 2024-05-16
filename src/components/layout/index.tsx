import Sidebar from "../sidebar";
import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <Sidebar>
            <Flex flex="1" flexDirection="column">
                {children}
            </Flex>
        </Sidebar>
    );
}

export default Layout;

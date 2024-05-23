import Layout from "../../components/layout"
import LargeCard from "../../components/large-card"
import { Flex } from "@chakra-ui/react"

function NovoRelatorio() {
    return (
        <Layout>
        <h1>NOVO RELATORIO</h1>
        <Flex>
         <LargeCard></LargeCard>
     </Flex>
     </Layout>
    );
  }
  
  export default NovoRelatorio;
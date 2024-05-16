import Layout from "../../components/layout"
import Card from "../../components/card"
import { Flex } from "@chakra-ui/react"
//<img src=""/>

function Home() {
    return (
        <Layout>
           <Flex>
            <><Card></Card><Card></Card><Card></Card></>
        </Flex>
        </Layout>
    )
}

export default Home
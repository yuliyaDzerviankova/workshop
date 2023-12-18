import { VStack } from "@chakra-ui/react"
import React from "react"

import { Footer, Header } from "./components"
import { Catalog } from "./features/catalog/Catalog"

const App = () => (
  <VStack align="center" bg="whiteMain" flex={1} justify="center" width="100%">
    <Header />
    <Catalog />
    <Footer />
  </VStack>
)

export { App }

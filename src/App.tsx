import { VStack } from "@chakra-ui/react"
import React from "react"

import { Catalog } from "./features"

const App = () => (
  <VStack align="center" bg="whiteMain" flex={1} justify="center" width="100%">
    <Catalog />
  </VStack>
)

export { App }

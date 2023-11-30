import { Flex } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const UnauthenticatedAppWrapper = () => (
  <Flex direction="column" flex={1} minH="100vh">
    <Outlet />
  </Flex>
)

export { UnauthenticatedAppWrapper }

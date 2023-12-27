import { RequiredIndicator as ChakraRequiredIndicator, VisuallyHidden } from "@chakra-ui/react"
import React from "react"

const RequiredIndicator = () => (
  <>
    <ChakraRequiredIndicator color="error.01" marginInlineStart={1} />
    <VisuallyHidden>(required field)</VisuallyHidden>
  </>
)

export { RequiredIndicator }

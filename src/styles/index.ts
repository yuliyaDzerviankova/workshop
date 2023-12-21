import { extendTheme } from "@chakra-ui/react"

import { colors } from "./colors"
import { components } from "./components"
import { fontSizes } from "./font-sizes"
import { fonts } from "./fonts"
import { space } from "./space"

export const theme = extendTheme({
  colors,
  fontSizes,
  fonts,
  space,
  components,
})

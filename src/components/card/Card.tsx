import { GridItem, Text } from "@chakra-ui/react"
import { ReactElement } from "react"

type Props = {
  icon: ReactElement
  title: string
}

const Card = ({ icon, title }: Props) => (
  <GridItem
    _hover={{ background: "link", color: "accent", cursor: "pointer" }}
    _notFirst={{ mb: 4 }}
    alignItems="center"
    boxShadow="4px 4px 5px 0 rgba(0, 0, 0, 0.25)"
    display="flex"
    flexDirection="column"
    h="170px"
    justifyContent="center"
    w="340px"
  >
    {icon}
    <Text color="blackMain" fontSize={18}>
      {title}
    </Text>
  </GridItem>
)

export { Card }

export type { Props as CardProps }

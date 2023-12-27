import { GridItem, Text } from "@chakra-ui/react"
import { ReactElement } from "react"

type Props = {
  icon: ReactElement
  title: string
  onClick: () => void
}

const Card = ({ icon, title, onClick }: Props) => (
  <GridItem
    _hover={{ background: "link", cursor: "pointer" }}
    alignItems="center"
    boxShadow="4px 4px 5px 0 rgba(0, 0, 0, 0.25)"
    display="flex"
    flexDirection="column"
    height="150px"
    justifyContent="center"
    px={10}
    onClick={onClick}
  >
    {icon}
    <Text color="blackMain" fontSize="lg" fontWeight={600} mt={3} textAlign="center">
      {title}
    </Text>
  </GridItem>
)

export { Card }

export type { Props as CardProps }

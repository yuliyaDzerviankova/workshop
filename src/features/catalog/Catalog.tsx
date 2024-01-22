import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"

import { AromasCategories, BodycareCategories, DescriptionModal, Filter, HomeCategories } from "./components"
import { One } from "../../assets"
import { flowers } from "../../mocks"
import { Flower } from "../../models"

const Catalog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [flower, setFlower] = useState<Flower>({
    price: 0,
    icon: "",
    id: "",
    description: "",
    feedbacks: [],
    name: "",
    ingredients: "",
  })

  return (
    <Box background="whiteMain">
      <VStack alignItems="flex-start" gap="20px" pb="100px" pt="40px" px="100px">
        <Link>Главная</Link>
        <Heading>Каталог</Heading>
        <Flex justify="space-between" width="100%">
          <HStack gap={5}>
            <Button background="#A682BD">Все</Button>
            <Button background="#DEEC00">Цветы</Button>

            <BodycareCategories />
            <AromasCategories />
            <HomeCategories />

            <Button background="#9DBFE8">Боксы</Button>
          </HStack>

          <Filter />
        </Flex>
        <Grid gap={5} templateColumns="repeat(4, 2fr)">
          {flowers.map((item) => (
            <GridItem
              key={item.id}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "0.2s all ease-out",
              }}
              onClick={() => {
                setFlower(item)
                onOpen()
              }}
            >
              <Image src={item.icon} />
            </GridItem>
          ))}
        </Grid>

        <DescriptionModal flower={flower} isOpen={isOpen} onClose={onClose} />
      </VStack>
    </Box>
  )
}

export { Catalog }

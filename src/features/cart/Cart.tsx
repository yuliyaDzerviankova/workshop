import { DeleteIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { ReactElement } from "react"
import { useNavigate } from "react-router-dom"

import { One, Three } from "assets"
import { Footer, Header } from "components"

type Flower = {
  id: string
  image: ReactElement
  name: string
  description: string
  count: number
  price: number
}

const Cart = () => {
  const navigate = useNavigate()
  const flowers: Flower[] = [
    {
      id: "1",
      image: <Image maxW="200px" src={One} />,
      name: "Букет сборный",
      description: "гергины, колокольчики, скабиоза, кампанула, патирус.",
      count: 1,
      price: 120,
    },
    {
      id: "2",
      image: <Image maxW="200px" src={Three} />,
      name: "Букет сборный",
      description: "антуриум, альстромерии, георгины, диантусы.",
      count: 2,
      price: 270,
    },
  ]

  return (
    <Box background="whiteMain" width="100%">
      <Header />
      <VStack alignItems="flex-start" px="100px" py="40px">
        <Flex>
          <Link textDecoration="underline" onClick={() => navigate("/main")}>
            Главная
          </Link>
          <Text mx={1.5}>-</Text>
          <Link textDecoration="underline" onClick={() => navigate("/catalog")}>
            Каталог
          </Link>
        </Flex>
        <Heading fontWeight={600}>Корзина</Heading>
        <Grid gap={6} templateColumns="repeat(6, 1fr)" width="100%">
          <GridItem colSpan={1} />
          <GridItem alignItems="center" colSpan={2} display="flex" textAlign="left">
            <Text>Товар</Text>
          </GridItem>
          <GridItem alignItems="center" display="flex">
            <Text>Кол-во</Text>
          </GridItem>
          <GridItem alignItems="center" display="flex">
            <Text>Сумма</Text>
          </GridItem>
          <GridItem alignItems="center" display="flex">
            <Button leftIcon={<DeleteIcon />} variant="ghost">
              Выбрать все
            </Button>
          </GridItem>
        </Grid>
        {flowers.map((flower) => (
          <Grid
            key={flower.id}
            _notLast={{ borderBottomWidth: 1, borderBottomColor: "grayMain" }}
            gap={6}
            py={4}
            templateColumns="repeat(6, 1fr)"
            width="100%"
          >
            <GridItem colSpan={1}>{flower.image}</GridItem>
            <GridItem
              alignItems="flex-start"
              colSpan={2}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Text fontSize="xl" fontWeight={600} mb={3}>
                  {flower.name}
                </Text>
                <Text fontWeight={500}>Состав: {flower.description}</Text>
              </Box>
              <Flex align="center">
                <Button _hover={{ color: "blackMain" }} color="gray" size="sm" variant="ghost">
                  Удалить
                </Button>
                <Box background="gray" h="10px" w="1px" />
                <Button _hover={{ color: "blackMain" }} color="gray" size="sm" variant="ghost">
                  Перейти к товару
                </Button>
              </Flex>
            </GridItem>
            <GridItem alignItems="center" display="flex">
              <Flex align="center">
                <Button background="grayMain" borderRadius={0} fontSize="24px">
                  -
                </Button>
                <Text mx={3}>{flower.count}</Text>
                <Button background="grayMain" borderRadius={0} fontSize="24px">
                  +
                </Button>
              </Flex>
            </GridItem>
            <GridItem alignItems="center" display="flex">
              <Text fontWeight={600}>{flower.price} р.</Text>
            </GridItem>
            <GridItem alignItems="center" display="flex" justifyContent="center">
              <Checkbox />
            </GridItem>
          </Grid>
        ))}
        <VStack alignItems="flex-end" justifyContent="center" mt={6} width="100%">
          <Stack gap={3} width="20%">
            <Flex align="center" justify="space-between">
              <Text>Итого:</Text>
              <Text fontWeight={600}>0 р.</Text>
            </Flex>
            <Button width="100%" onClick={() => navigate("/order")}>
              Перейти к оформлению
            </Button>
            <Text color="#EA777D" fontSize="sm" textAlign="center">
              Вы не выбрали товар!
            </Text>
            <Flex justify="flex-end">
              <Button background="grayMain" fontSize="sm">
                Продолжить покупки
              </Button>
            </Flex>
          </Stack>
        </VStack>
      </VStack>
      <Footer />
    </Box>
  )
}

export { Cart }

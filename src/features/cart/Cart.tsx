import { DeleteIcon } from "@chakra-ui/icons"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { ReactElement, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { flowers } from "../../mocks"
import { One, Three } from "assets"

type Flower = {
  id: string
  image: ReactElement
  name: string
  description: string
  count: number
  price: number
}

const prepareOrder = [
  {
    id: "1",
    flower: flowers[0],
    count: 1,
  },
  {
    id: "2",
    flower: flowers[2],
    count: 1,
  },
]

const Cart = () => {
  const navigate = useNavigate()
  const [sum, setSum] = useState(0)

  useEffect(() => {
    const sumEach = prepareOrder.map(({ count, flower }) => flower.price * count)
    const sumTotal = sumEach.reduce((a, b) => a + b)
    setSum(sumTotal)
  }, [])

  return (
    <Box background="whiteMain" width="100%">
      <VStack alignItems="flex-start" px="100px" py="40px">
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink _hover={{ textDecoration: "none" }} color="link" href="/main" textDecoration="underline">
              Главная
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="link" href="/catalog">
              Каталог
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
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
        {prepareOrder.map(({ id, flower, count }) => (
          <Grid
            key={id}
            _notLast={{ borderBottomWidth: 1, borderBottomColor: "grayMain" }}
            gap={6}
            py={4}
            templateColumns="repeat(6, 1fr)"
            width="100%"
          >
            <GridItem colSpan={1}>
              <Image src={flower.icon} />
            </GridItem>
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
                <Text mx={3}>{count}</Text>
                <Button background="grayMain" borderRadius={0} fontSize="24px">
                  +
                </Button>
              </Flex>
            </GridItem>
            <GridItem alignItems="center" display="flex">
              <Text fontWeight={600}>{flower.price * count} р.</Text>
            </GridItem>
            <GridItem alignItems="center" display="flex" justifyContent="center">
              <Checkbox size="lg" />
            </GridItem>
          </Grid>
        ))}
        <VStack alignItems="flex-end" justifyContent="center" mt={6} width="100%">
          <Stack gap={3} width="20%">
            <Flex align="center" justify="space-between">
              <Text>Итого:</Text>
              <Text fontWeight={600}>{sum} р.</Text>
            </Flex>
            <Button width="100%" onClick={() => navigate("/order")}>
              Перейти к оформлению
            </Button>
            {/*<Text color="#EA777D" fontSize="sm" textAlign="center">*/}
            {/*  Вы не выбрали товар!*/}
            {/*</Text>*/}
            <Flex justify="flex-end">
              <Button background="grayMain" fontSize="sm" onClick={() => navigate("/catalog")}>
                Продолжить покупки
              </Button>
            </Flex>
          </Stack>
        </VStack>
      </VStack>
    </Box>
  )
}

export { Cart }

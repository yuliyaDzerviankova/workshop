import { DeleteIcon } from "@chakra-ui/icons"
import { Box, Button, Checkbox, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { One } from "assets"
import { Footer, Header } from "components"

const Cart = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <Header />
      <VStack alignItems="flex-start" px="100px" py="40px">
        <Link color="link">Главная - Каталог</Link>
        <Heading fontWeight={600}>Корзина</Heading>
        <Box alignItems="center" display="flex" justifyContent="flex-end" width="100%">
          <Flex align="center" justify="space-between" width="80%">
            <Text>Товар</Text>
            <Text>Цена, шт.</Text>
            <Text>Кол-во</Text>
            <Text>Сумма</Text>
            <Button leftIcon={<DeleteIcon />}>Выбрать все</Button>
          </Flex>
        </Box>
        <Flex align="flex-start" justify="space-between" width="100%">
          <Image maxH="200px" src={One} />
          <Flex align="center" justify="space-between" width="80%">
            <Box>
              <Text>Букет сборный</Text>
              <Text>Состав: много клевых цветов</Text>
            </Box>
            <Text>12314 р.</Text>
            <Flex align="center">
              <Button background="grayMain" borderRadius={0} fontSize="24px">
                -
              </Button>
              <Text mx={3}>1</Text>
              <Button background="grayMain" borderRadius={0} fontSize="24px">
                +
              </Button>
            </Flex>
            <Text>12314 р.</Text>
            <Checkbox />
          </Flex>
        </Flex>

        <Flex align="flex-start" justify="space-between" width="100%">
          <Image maxH="200px" src={One} />
          <Flex align="center" justify="space-between" width="80%">
            <Box>
              <Text>Букет сборный</Text>
              <Text>Состав: много клевых цветов</Text>
            </Box>
            <Text>12314 р.</Text>
            <Flex align="center">
              <Button background="grayMain" borderRadius={0} fontSize="24px">
                -
              </Button>
              <Text mx={3}>1</Text>
              <Button background="grayMain" borderRadius={0} fontSize="24px">
                +
              </Button>
            </Flex>
            <Text>12314 р.</Text>
            <Checkbox />
          </Flex>
        </Flex>

        <VStack alignItems="flex-end" justifyContent="center" width="100%">
          <Flex align="center" justify="space-between">
            <Text>Итого:</Text>
            <Text>36942 р.</Text>
          </Flex>
          <Button background="accent" borderRadius={0} fontWeight={400} onClick={() => navigate("/order")}>
            Перейти к оформлению
          </Button>
          <Text color="#EA777D">Вы не выбрали товар!</Text>
          <Button background="link" borderRadius={0} fontWeight={400}>
            Продолжить покупки
          </Button>
        </VStack>
      </VStack>
      <Footer />
    </Box>
  )
}

export { Cart }

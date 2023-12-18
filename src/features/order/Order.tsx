import { CloseIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react"

import { Two } from "assets"
import { Footer, Header } from "components"

const Order = () => (
  <VStack alignItems="flex-start" justifyItems="flex-start" width="100%">
    <Header />
    <VStack alignItems="flex-start" px="100px" py="40px" width="100%">
      <Link>Главная - Каталог - Корзина</Link>
      <Heading fontWeight={600}>Оформление заказа</Heading>
      <Flex mt="30px" width="100%">
        <VStack alignItems="flex-start" background="rgba(198, 197, 197, 0.20)" flex={1} gap={4} p="15px" width="100%">
          <Text>Вы авторизованы как Валентина</Text>
          <FormControl>
            <FormLabel>Выберите способ доставки</FormLabel>
            <RadioGroup>
              <Radio>Самовывоз</Radio>
              <Radio>Курьером или почтой</Radio>
            </RadioGroup>
            <FormHelperText>Способ не выбран</FormHelperText>
          </FormControl>

          <Box>
            <Text>Адрес магазина для самовывоза:</Text>
            <Text>г. Гомель, ул. Какая-то, д. 13.</Text>
            <Link>Как добраться</Link>
          </Box>

          <Box>
            <Text>Адрес для доставки почтой или курьером:</Text>
            <Text color="#EA777D">Адрес отсутствует.</Text>
            <Link>Заполнить данные в личном кабинете</Link>
            <Text>г. Могелев, ул. Та самая, д. 13, кв. 777, индекс: 728374.</Text>
            <Text>Изменить адрес доставки</Text>
          </Box>

          <Input
            background="#FAF6F6"
            borderColor="link"
            borderRadius={0}
            borderWidth={1}
            placeholder="Город, улица, дом"
            width="100%"
          />
          <Flex>
            <Input
              background="#FAF6F6"
              borderColor="link"
              borderRadius={0}
              borderWidth={1}
              mr="20px"
              placeholder="Квартира"
            />
            <Input
              background="#FAF6F6"
              borderColor="link"
              borderRadius={0}
              borderWidth={1}
              mr="20px"
              placeholder="Подъезд"
            />
            <Input background="#FAF6F6" borderColor="link" borderRadius={0} borderWidth={1} placeholder="Этаж" />
          </Flex>
          <Button background="accent" borderRadius={0} fontWeight={400}>
            Изменить
          </Button>

          <FormControl>
            <FormLabel>Комментарий к заказу</FormLabel>
            <Input
              background="#FAF6F6"
              borderColor="link"
              borderRadius={0}
              borderWidth={1}
              placeholder="Введите комментарий"
            />
          </FormControl>
          <Flex justify="space-between" width="100%">
            <FormControl>
              <FormLabel>Получатель</FormLabel>
              <Input
                background="#FAF6F6"
                borderColor="link"
                borderRadius={0}
                borderWidth={1}
                placeholder="Шишкова Валентина"
              />
            </FormControl>
            <FormControl ml="20px">
              <FormLabel>Номер телефона</FormLabel>
              <Input
                background="#FAF6F6"
                borderColor="link"
                borderRadius={0}
                borderWidth={1}
                placeholder="+375293195299"
              />
            </FormControl>
          </Flex>
        </VStack>

        <VStack flex={1} ml="35px">
          <HStack borderBottomColor="#C6C5C5" borderBottomWidth={1} pb={4} position="relative" width="100%">
            <CloseIcon position="absolute" right={0} top={0} />
            <Image maxH="150px" src={Two} />
            <Text>Букет сборный</Text>
            <Text>12314 р.</Text>
          </HStack>

          <HStack mt={4} position="relative" width="100%">
            <CloseIcon position="absolute" right={0} top={0} />
            <Image maxH="150px" src={Two} />
            <Text>Букет сборный</Text>
            <Text>12314 р.</Text>
          </HStack>

          <Flex align="center" justify="space-between" mt="30px" width="100%">
            <Text>Сумма:</Text>
            <Text>36942 р.</Text>
          </Flex>
          <Flex align="center" justify="space-between" width="100%">
            <Text>Доставка:</Text>
            <Text>42 р.</Text>
          </Flex>
        </VStack>
      </Flex>

      <VStack align="flex-end" flex={1} width="100%">
        <Box alignItems="flex-end" display="flex" flexDirection="column" maxW="20%">
          <Flex align="center" justify="space-between" width="100%">
            <Text>Итого:</Text>
            <Text>36942 р.</Text>
          </Flex>
          <Button background="accent" borderRadius={0} my={4} width="100%">
            Оформить заказ
          </Button>
          <Text color="error" fontSize={14}>
            Проверьте правильность данных!
          </Text>
          <Button background="grayMain" borderRadius={0} fontWeight={400} mt={4}>
            Вернуться в корзину
          </Button>
        </Box>
      </VStack>
    </VStack>

    <Footer />
  </VStack>
)

export { Order }

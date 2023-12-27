import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons"
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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"
import { ReactElement } from "react"
import { useNavigate } from "react-router-dom"

import { One, SuccessIcon, Three, Two } from "assets"
import { Footer, Header } from "components"

type OrderDetails = {
  id: string
  image: ReactElement
  name: string
  price: number
}

const Order = () => {
  const navigate = useNavigate()
  const { onClose, isOpen, onOpen } = useDisclosure()
  const orderDetails: OrderDetails[] = [
    {
      id: "1",
      image: <Image maxH="150px" src={One} />,
      name: "Букет сборный",
      price: 120,
    },
    {
      id: "2",
      image: <Image maxH="150px" src={Three} />,
      name: "Букет сборный",
      price: 270,
    },
  ]

  return (
    <VStack alignItems="flex-start" justifyItems="flex-start" width="100%">
      <Header />
      <VStack alignItems="flex-start" px="100px" py="40px" width="100%">
        <Link>Главная - Каталог - Корзина</Link>
        <Heading fontWeight={600}>Оформление заказа</Heading>
        <Flex mt="30px" width="100%">
          <VStack alignItems="flex-start" background="grayOpacity" flex={1} gap={4} p="15px" width="100%">
            <Text>Вы авторизованы как Валентина</Text>
            <FormControl>
              <FormLabel>Выберите способ доставки</FormLabel>
              <RadioGroup display="flex" flexDirection="column">
                <Radio value="own">Самовывоз</Radio>
                <Radio value="delivery">Курьером или почтой</Radio>
              </RadioGroup>
              <FormHelperText color="error" fontSize="sm">Способ не выбран</FormHelperText>
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
              background="whiteMain"
              borderColor="link"
              borderWidth={1}
              placeholder="Город, улица, дом"
              width="100%"
            />
            <Flex>
              <Input background="whiteMain" borderColor="link" borderWidth={1} mr="20px" placeholder="Квартира" />
              <Input background="whiteMain" borderColor="link" borderWidth={1} mr="20px" placeholder="Подъезд" />
              <Input background="whiteMain" borderColor="link" borderRadius={0} borderWidth={1} placeholder="Этаж" />
            </Flex>
            <Button background="accent" borderRadius={0} fontWeight={400}>
              Изменить
            </Button>

            <FormControl>
              <FormLabel>Комментарий к заказу</FormLabel>
              <Input background="whiteMain" borderColor="link" borderWidth={1} placeholder="Введите комментарий" />
            </FormControl>
            <Flex justify="space-between" width="100%">
              <FormControl>
                <FormLabel>Получатель</FormLabel>
                <Input background="whiteMain" borderColor="link" borderWidth={1} placeholder="Шишкова Валентина" />
              </FormControl>
              <FormControl ml="20px">
                <FormLabel>Номер телефона</FormLabel>
                <Input background="whiteMain" borderColor="link" borderWidth={1} placeholder="+375293195299" />
              </FormControl>
            </Flex>
          </VStack>

          <VStack flex={1} ml="35px">
            {orderDetails.map((item) => (
              <HStack
                key={item.id}
                _notFirst={{ mt: 4 }}
                borderBottomColor="#C6C5C5"
                borderBottomWidth={1}
                pb={4}
                position="relative"
                width="100%"
              >
                <CloseIcon position="absolute" right={0} top={0} />
                {item.image}
                <Text>{item.name}</Text>
                <Text>{item.price} р.</Text>
              </HStack>
            ))}

            <Flex align="center" justify="space-between" mt="30px" width="100%">
              <Text>Сумма:</Text>
              <Text fontWeight={600}>36942 р.</Text>
            </Flex>
            <Flex align="center" justify="space-between" width="100%">
              <Text>Доставка:</Text>
              <Text fontWeight={600}>42 р.</Text>
            </Flex>
          </VStack>
        </Flex>

        <VStack align="flex-end" flex={1} width="100%">
          <Box alignItems="flex-end" display="flex" flexDirection="column" maxW="25%">
            <Flex align="center" justify="space-between" width="100%">
              <Text>Итого:</Text>
              <Text fontWeight={600}>36942 р.</Text>
            </Flex>
            <Button background="accent" borderRadius={0} my={4} width="100%" onClick={onOpen}>
              Оформить заказ
            </Button>
            <Text color="error" fontSize="sm">
              Проверьте правильность данных!
            </Text>
            <Button background="grayMain" borderRadius={0} fontWeight={400} mt={4} onClick={() => navigate("/cart")}>
              Вернуться в корзину
            </Button>
          </Box>
        </VStack>
      </VStack>

      <Footer />

      <Modal isOpen={isOpen} size="md" isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="40px">
          <ModalCloseButton onClick={onClose} />
          <ModalBody alignItems="center" display="flex" flexDirection="column" justifyContent="center">
            <SuccessIcon height="50px" mb={2.5} width="50px" />
            <Heading color="blackMain" fontSize="20px" fontWeight={700} mb={5} textAlign="center">
              Ваш заказ оформлен!
            </Heading>
            <Text color="blackMain" fontWeight={500} mb={6} textAlign="center">
              В течение тридцати минут сотрудник нашего магазин свяжется с вами!
            </Text>
            <Link color="link" onClick={onClose}>
              продолжить покупки <ArrowForwardIcon />
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  )
}

export { Order }

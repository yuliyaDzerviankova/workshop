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
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"
import { ReactElement } from "react"
import { useNavigate } from "react-router-dom"

import { One, SuccessIcon, Three } from "assets"
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
        <Flex>
          <Link>Главная</Link>
          <Text mx={2}>-</Text>
          <Link>Каталог</Link>
          <Text mx={2}>-</Text>
          <Link>Корзина</Link>
        </Flex>
        <Heading fontWeight={600}>Оформление заказа</Heading>
        <Flex mt="30px" width="100%">
          <VStack alignItems="flex-start" background="grayOpacity" flex={1} gap={4} p="15px" width="100%">
            <Flex>
              <Text>Вы авторизованы как</Text>
              <Text fontWeight={600} ml={2}>
                Валентина
              </Text>
            </Flex>
            <FormControl isRequired>
              <FormLabel>Выберите способ доставки</FormLabel>
              <RadioGroup display="flex" flexDirection="column">
                <Radio my={2} value="own">
                  Самовывоз
                </Radio>
                <Radio value="delivery">Курьером или почтой</Radio>
              </RadioGroup>
              <FormHelperText color="error" fontSize="sm" fontWeight={500}>
                Способ не выбран
              </FormHelperText>
            </FormControl>

            <Box>
              <Text fontWeight={500} mb={4}>
                Адрес магазина для самовывоза:
              </Text>
              <Box ml={4}>
                <Text>г. Гомель, ул. Какая-то, д. 13.</Text>
                <Link>Как добраться</Link>
              </Box>
            </Box>

            <Box>
              <Text fontWeight={500} mb={4}>
                Адрес для доставки почтой или курьером:
              </Text>
              <Box ml={4}>
                <Text color="#EA777D" fontWeight={500} mb={2}>
                  Адрес отсутствует.
                </Text>
                <Link>Заполнить данные в личном кабинете</Link>
                <Text my={2}>г. Могилев, ул. Та самая, д. 13, кв. 777, индекс: 728374.</Text>
                <Link color="grayMain">Изменить адрес доставки</Link>
              </Box>
            </Box>

            <Input placeholder="Город, улица, дом" width="100%" />
            <Flex>
              <Input mr="20px" placeholder="Квартира" />
              <Input mr="20px" placeholder="Подъезд" />
              <Input placeholder="Этаж" />
            </Flex>
            <Text color="error" fontSize="small" fontWeight={500}>
              Данные не введены
            </Text>
            <Button alignSelf="flex-end" fontWeight={400}>
              Изменить
            </Button>

            <Stack width="100%">
              <FormControl isRequired>
                <FormLabel>Выберите способ оплаты</FormLabel>
                <RadioGroup display="flex" flexDirection="column">
                  <Radio my={2} value="own">
                    При самовывозе
                  </Radio>
                  <Radio value="card">Картой на сайте</Radio>
                </RadioGroup>
                <FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>
                  Способ не выбран
                </FormHelperText>
                <Link color="grayMain">Добавить другую карту</Link>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Номер карты</FormLabel>
                <Input placeholder="Введите цифры" width="100%" />
                <FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>
                  Номер карты введен неверно
                </FormHelperText>
              </FormControl>

              <Flex>
                <FormControl display="flex" flexDirection="column" isRequired>
                  <FormLabel>Срок действия</FormLabel>
                  <Flex alignItems="center" justifyContent="space-between" width="100%">
                    <Input placeholder="ММ" />
                    <Text color="gray" fontSize="xl" mx={4}>
                      /
                    </Text>
                    <Input placeholder="ГГ" />
                  </Flex>
                  <FormHelperText color="error" fontSize="sm" fontWeight={500} my={2} width="100%">
                    Срок действия карты введен неверно
                  </FormHelperText>
                  <FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>
                    CVV-код введен неверно
                  </FormHelperText>
                </FormControl>
                <FormControl ml={4} isRequired>
                  <FormLabel>CVV-код</FormLabel>
                  <Input placeholder="" />
                </FormControl>
              </Flex>
              <FormControl mt={4} isRequired>
                <FormLabel>Имя владельца карты</FormLabel>
                <Input
                  _placeholder={{ textTransform: "none", color: "gray", fontSize: "sm" }}
                  placeholder="Введите имя и фамилию"
                  textTransform="uppercase"
                />
                <FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>
                  Фамилия и имя владельца карты введены неверно
                </FormHelperText>
              </FormControl>

              <Button alignSelf="flex-end" fontWeight={400}>
                Изменить
              </Button>
            </Stack>

            <Stack mt={4} width="100%">
              <FormControl mb={4}>
                <FormLabel>Комментарий к заказу</FormLabel>
                <Input background="whiteMain" borderColor="link" borderWidth={1} placeholder="Введите комментарий" />
              </FormControl>
              <Flex justify="space-between" width="100%">
                <FormControl isRequired>
                  <FormLabel>Получатель</FormLabel>
                  <Input background="whiteMain" borderColor="link" borderWidth={1} placeholder="Шишкова Валентина" />
                  <FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>
                    Данные не введены
                  </FormHelperText>
                </FormControl>
                <FormControl ml="20px" isRequired>
                  <FormLabel>Номер телефона</FormLabel>
                  <Input background="whiteMain" borderColor="link" borderWidth={1} placeholder="+375293195299" />
                </FormControl>
              </Flex>
            </Stack>
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
                <Flex justify="space-between" ml={5} width="100%">
                  <Text fontWeight={500}>{item.name}</Text>
                  <Text fontWeight={600}>{item.price} р.</Text>
                </Flex>
              </HStack>
            ))}

            <Flex align="center" justify="space-between" mt="30px" width="100%">
              <Text>Сумма:</Text>
              <Text fontWeight={600}>390 р.</Text>
            </Flex>
            <Flex align="center" justify="space-between" width="100%">
              <Text>Доставка:</Text>
              <Text fontWeight={600}>15 р.</Text>
            </Flex>
          </VStack>
        </Flex>

        <VStack align="flex-end" flex={1} width="100%">
          <Box alignItems="flex-end" display="flex" flexDirection="column" w="30%">
            <Flex align="center" justify="space-between" width="100%">
              <Text>Итого:</Text>
              <Text fontWeight={600}>405 р.</Text>
            </Flex>
            <Button background="accent" borderRadius={0} my={4} width="100%" onClick={onOpen}>
              Оформить заказ
            </Button>
            <Text color="error" fontSize="sm" textAlign="center" width="100%">
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

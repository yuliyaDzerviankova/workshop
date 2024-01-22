import { ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  FormControl,
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
import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { flowers } from "../../mocks"
import { Flower } from "../../models"
import { SuccessIcon } from "assets"

type OrderDetails = {
  id: string
  flower: Flower
  count: number
}

const orderDetails: OrderDetails[] = [
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

const Order = () => {
  const navigate = useNavigate()
  const { onClose, isOpen, onOpen } = useDisclosure()
  const [deliveryAddress, setDeliveryAddress] = useState("г. Гомель, ул. Советская, д. 10, кв. 9, подъезд 1, этаж 3")
  const [isChangeAddress, setIsChangeAddress] = useState(false)
  const [deliveryType, setDeliveryType] = useState<"own" | "courier">("own")
  const [paymentType, setPaymentType] = useState<"pickup" | "card" | "">("")
  const [isChangePaymentType, setIsChangePaymentType] = useState(false)
  const [sum, setSum] = useState(0)
  const [cardNumber, setCardNumber] = useState("4852")
  const [address, setAddress] = useState({
    city: "",
    house: "",
    apartment: "",
    entrance: "",
    floor: "",
  })
  const [cardInfo, setCardInfo] = useState({
    number: "",
    month: "",
    year: "",
    cvv: "",
    name: "",
  })

  useEffect(() => {
    const prices = orderDetails.map(({ flower }) => flower.price)
    const sum = prices.reduce((a, b) => a + b)
    setSum(sum)
  }, [])

  useEffect(() => {
    if (paymentType === "pickup") {
      setIsChangePaymentType(false)
    }
  }, [paymentType])

  useEffect(() => {
    if (deliveryType === "courier") {
      setPaymentType("card")
    }
  }, [deliveryType])

  const changeAddress = () => {
    const { house, floor, city, apartment, entrance } = address
    setDeliveryAddress(`${city}, д. ${house}, кв. ${apartment}, подъезд ${entrance}, этаж ${floor}`)
    setAddress({
      city: "",
      house: "",
      apartment: "",
      entrance: "",
      floor: "",
    })
    setIsChangeAddress(false)
  }

  const valid = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event
    const regexp = /^\d{0,2}$/
    if (value === "" || regexp.test(value)) {
      setCardInfo({ ...cardInfo, [name]: value })
    }
  }

  const validCardNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    const regexp = /^\d{0,16}$/
    if (value === "" || regexp.test(value)) {
      setCardInfo({ ...cardInfo, number: value })
    }
  }

  const validCvv = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    const regexp = /^\d{0,3}$/
    if (value === "" || regexp.test(value)) {
      setCardInfo({ ...cardInfo, cvv: value })
    }
  }

  const updateCard = () => {
    const lastDigits = cardInfo.number.slice(-4)
    setCardNumber(lastDigits)
    setCardInfo({
      number: "",
      month: "",
      year: "",
      cvv: "",
      name: "",
    })
    setIsChangePaymentType(false)
  }

  return (
    <VStack alignItems="flex-start" background="whiteMain" justifyItems="flex-start" width="100%">
      <VStack alignItems="flex-start" px="100px" py="40px" width="100%">
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink _hover={{ textDecoration: "none" }} color="link" href="/main" textDecoration="underline">
              Главная
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink _hover={{ textDecoration: "none" }} color="link" href="/catalog" textDecoration="underline">
              Каталог
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink color="link" href="/order">
              Корзина
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading fontWeight={600}>Оформление заказа</Heading>
        <Flex mt="30px" width="100%">
          <VStack alignItems="flex-start" background="grayOpacity" flex={1} gap={4} p="15px" width="100%">
            <Flex>
              <Text>Вы авторизованы как</Text>
              <Text fontWeight={600} ml={2}>
                Анастасия
              </Text>
            </Flex>
            <FormControl isRequired>
              <FormLabel>Выберите способ доставки</FormLabel>
              <RadioGroup
                display="flex"
                flexDirection="column"
                onChange={(value: "own" | "courier") => setDeliveryType(value)}
              >
                <Radio my={2} value="own">
                  Самовывоз
                </Radio>
                <Radio value="courier">Курьером или почтой</Radio>
              </RadioGroup>
              {/*<FormHelperText color="error" fontSize="sm" fontWeight={500}>*/}
              {/*  Способ не выбран*/}
              {/*</FormHelperText>*/}
            </FormControl>

            {deliveryType === "own" && (
              <Box>
                <Text fontWeight={500} mb={4}>
                  Адрес магазина для самовывоза:
                </Text>
                <Box ml={4}>
                  <Text>г. Гомель, ул. Гагарина 55Б</Text>
                  {/*<Link>Как добраться</Link>*/}
                </Box>
              </Box>
            )}

            {deliveryType === "courier" && (
              <>
                <Box>
                  <Text fontWeight={500} mb={2}>
                    Адрес для доставки почтой или курьером:
                  </Text>
                  <Box ml={4}>
                    <Text mt={2}>{deliveryAddress}</Text>
                    {/*<Text color="#EA777D" fontWeight={500} mb={2}>*/}
                    {/*  Адрес отсутствует.*/}
                    {/*</Text>*/}
                    {/*<Link mr={2}>Заполнить данные в личном кабинете</Link>*/}
                    <Button
                      _hover={{ textDecoration: "none" }}
                      color="grayMain"
                      textDecoration="underline"
                      variant="ghost"
                      onClick={() => setIsChangeAddress(!isChangeAddress)}
                    >
                      Изменить адрес доставки
                    </Button>
                  </Box>
                </Box>

                {isChangeAddress && (
                  <>
                    <Input
                      placeholder="Город, улица"
                      value={address.city}
                      width="100%"
                      onChange={({ target: { value } }) => setAddress({ ...address, city: value })}
                    />
                    <Flex>
                      <Input
                        mr="20px"
                        placeholder="Дом"
                        type="number"
                        value={address.house}
                        onChange={({ target: { value } }) => setAddress({ ...address, house: value })}
                      />
                      <Input
                        mr="20px"
                        placeholder="Квартира"
                        type="number"
                        value={address.apartment}
                        onChange={({ target: { value } }) => setAddress({ ...address, apartment: value })}
                      />
                      <Input
                        mr="20px"
                        placeholder="Подъезд"
                        value={address.entrance}
                        onChange={({ target: { value } }) => setAddress({ ...address, entrance: value })}
                      />
                      <Input
                        placeholder="Этаж"
                        value={address.floor}
                        onChange={({ target: { value } }) => setAddress({ ...address, floor: value })}
                      />
                    </Flex>
                    {/*<Text color="error" fontSize="small" fontWeight={500}>*/}
                    {/*  Данные не введены*/}
                    {/*</Text>*/}
                    <Button alignSelf="flex-end" fontWeight={400} onClick={changeAddress}>
                      Изменить
                    </Button>
                  </>
                )}
              </>
            )}

            <Stack width="100%">
              <FormControl isRequired>
                <FormLabel>Выберите способ оплаты</FormLabel>
                <RadioGroup
                  display="flex"
                  flexDirection="column"
                  mb={2}
                  value={paymentType}
                  onChange={(value: "pickup" | "card") => setPaymentType(value)}
                >
                  {deliveryType === "own" && (
                    <Radio my={2} value="pickup">
                      При самовывозе
                    </Radio>
                  )}
                  <Radio value="card">Картой на сайте (****{cardNumber})</Radio>
                </RadioGroup>
                {/*<FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>*/}
                {/*  Способ не выбран*/}
                {/*</FormHelperText>*/}
                {paymentType === "card" && (
                  <Button
                    _hover={{ textDecoration: "none" }}
                    color="grayMain"
                    textDecoration="underline"
                    variant="ghost"
                    onClick={() => setIsChangePaymentType(!isChangePaymentType)}
                  >
                    Добавить другую карту
                  </Button>
                )}
              </FormControl>

              {isChangePaymentType && paymentType === "card" && (
                <>
                  <FormControl mt={4} isRequired>
                    <FormLabel>Номер карты</FormLabel>
                    <Input
                      placeholder="Введите цифры"
                      type="number"
                      value={cardInfo.number}
                      width="100%"
                      onChange={validCardNumber}
                    />
                    {/*<FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>*/}
                    {/*  Номер карты введен неверно*/}
                    {/*</FormHelperText>*/}
                  </FormControl>

                  <Flex mt={2}>
                    <FormControl display="flex" flexDirection="column" isRequired>
                      <FormLabel>Срок действия</FormLabel>
                      <Flex alignItems="center" justifyContent="space-between" width="100%">
                        <Input name="month" placeholder="ММ" type="number" value={cardInfo.month} onChange={valid} />
                        <Text color="gray" fontSize="xl" mx={4}>
                          /
                        </Text>
                        <Input name="year" placeholder="ГГ" type="number" value={cardInfo.year} onChange={valid} />
                      </Flex>
                      {/*<FormHelperText color="error" fontSize="sm" fontWeight={500} my={2} width="100%">*/}
                      {/*  Срок действия карты введен неверно*/}
                      {/*</FormHelperText>*/}
                      {/*<FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>*/}
                      {/*  CVV-код введен неверно*/}
                      {/*</FormHelperText>*/}
                    </FormControl>
                    <FormControl ml={4} isRequired>
                      <FormLabel>CVV-код</FormLabel>
                      <Input name="cvv" placeholder="" type="number" value={cardInfo.cvv} onChange={validCvv} />
                    </FormControl>
                  </Flex>
                  <FormControl mt={4} isRequired>
                    <FormLabel>Имя владельца карты</FormLabel>
                    <Input
                      _placeholder={{ textTransform: "none", color: "gray", fontSize: "sm" }}
                      placeholder="Введите имя и фамилию"
                      textTransform="uppercase"
                      value={cardInfo.name}
                      onChange={({ target: { value } }) => setCardInfo({ ...cardInfo, name: value })}
                    />
                    {/*<FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>*/}
                    {/*  Фамилия и имя владельца карты введены неверно*/}
                    {/*</FormHelperText>*/}
                  </FormControl>

                  <Button alignSelf="flex-end" fontWeight={400} onClick={updateCard}>
                    Изменить
                  </Button>
                </>
              )}
            </Stack>

            <Stack mt={4} width="100%">
              <FormControl mb={4}>
                <FormLabel>Комментарий к заказу</FormLabel>
                <Input background="whiteMain" borderColor="link" borderWidth={1} placeholder="Введите комментарий" />
              </FormControl>
              <Flex justify="space-between" width="100%">
                <FormControl isRequired>
                  <FormLabel>Получатель</FormLabel>
                  <Input
                    background="whiteMain"
                    borderColor="link"
                    borderWidth={1}
                    placeholder="Шишкова Валентина"
                    value="Денисова Анастасия"
                    disabled
                  />
                  {/*<FormHelperText color="error" fontSize="sm" fontWeight={500} my={2}>*/}
                  {/*  Данные не введены*/}
                  {/*</FormHelperText>*/}
                </FormControl>
                <FormControl ml="20px" isRequired>
                  <FormLabel>Номер телефона</FormLabel>
                  <Input
                    background="whiteMain"
                    borderColor="link"
                    borderWidth={1}
                    placeholder="+375293195299"
                    value="+375447282024"
                    disabled
                  />
                </FormControl>
              </Flex>
            </Stack>
          </VStack>

          <VStack flex={1} ml="35px">
            {orderDetails.map(({ flower, id, count }) => (
              <HStack
                key={id}
                _notFirst={{ mt: 4 }}
                borderBottomColor="#C6C5C5"
                borderBottomWidth={1}
                pb={4}
                position="relative"
                width="100%"
              >
                <CloseIcon position="absolute" right={0} top={0} />
                <Image maxW="200px" src={flower.icon} />
                <Flex justify="space-between" ml={5} width="100%">
                  <Text fontWeight={500}>{flower.name}</Text>
                  <Text fontWeight={600}>{flower.price * count} р.</Text>
                </Flex>
              </HStack>
            ))}

            <Flex align="center" justify="space-between" mt={4} width="100%">
              <Text>Сумма:</Text>
              <Text fontWeight={600}>{sum} р.</Text>
            </Flex>
            <Flex align="center" justify="space-between" width="100%">
              <Text>Доставка:</Text>
              <Text fontWeight={600}>15 р.</Text>
            </Flex>
          </VStack>
        </Flex>

        <VStack align="flex-end" flex={1} mt={6} width="100%">
          <Box alignItems="flex-end" display="flex" flexDirection="column" w="30%">
            <Flex align="center" justify="space-between" width="100%">
              <Text>Итого:</Text>
              <Text fontWeight={600}>{sum + 15} р.</Text>
            </Flex>
            <Button background="accent" borderRadius={0} my={4} width="100%" onClick={onOpen}>
              Оформить заказ
            </Button>
            {/*<Text color="error" fontSize="sm" textAlign="center" width="100%">*/}
            {/*  Проверьте правильность данных!*/}
            {/*</Text>*/}
            <Button background="grayMain" borderRadius={0} fontWeight={400} mt={4} onClick={() => navigate("/cart")}>
              Вернуться в корзину
            </Button>
          </Box>
        </VStack>
      </VStack>

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
            <Link
              color="link"
              onClick={() => {
                onClose()
                navigate("/catalog")
              }}
            >
              продолжить покупки <ArrowForwardIcon />
            </Link>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  )
}

export { Order }

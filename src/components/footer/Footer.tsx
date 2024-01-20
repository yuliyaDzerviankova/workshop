import { Box, Flex, HStack, Heading, Link, List, ListItem, Text } from "@chakra-ui/react"

import { InstagramIcon, TelegramIcon } from "../../assets"

const Footer = () => (
  <HStack
    alignItems="flex-start"
    bgColor="link"
    fontSize="14px"
    gap="2rem"
    justifyContent="space-between"
    px="60px"
    py="30px"
    width="100%"
  >
    <Box>
      <Heading color="accent" fontSize="22px" fontWeight={500} mb="10px" textTransform="uppercase">
        workshop nina
      </Heading>
      <Text mb={2}>г. Гомель, ул. Гагарина 55Б</Text>
      <Text mb={2}>+375 (29) 260-88-66</Text>
      <Text>workshop.nina@gmail.com</Text>
      <Flex align="center" mt={3}>
        <Link href="https://www.instagram.com/workshop.nina/" mr={3} w="30px">
          <InstagramIcon height="30px" width="30px" />
        </Link>
        <Link href="#" w="30px">
          <TelegramIcon height="30px" width="30px" />
        </Link>
      </Flex>
    </Box>
    <Box>
      <Heading color="accent" fontSize="22px" fontWeight={500} mb="10px">
        Навигация
      </Heading>
      <List>
        <Link variant="footermenu">
          <ListItem>Главная</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Каталог</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Контакты</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Личный кабинет</ListItem>
        </Link>
      </List>
    </Box>
    <Box>
      <Heading color="accent" fontSize="22px" fontWeight={500} mb="10px">
        Каталог
      </Heading>
      <List>
        <Link variant="footermenu">
          <ListItem>Цветы</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Уходовое</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Для дома</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Свечи и дифузоры</ListItem>
        </Link>
      </List>
    </Box>
    <Box>
      <Heading color="accent" fontSize="22px" fontWeight={500} mb="10px">
        Частые вопросы
      </Heading>
      <List>
        <Link variant="footermenu">
          <ListItem>О нас</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>О доставке</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Как оплатить?</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Где находится магазин?</ListItem>
        </Link>
      </List>
    </Box>
    <Box maxW="450px">
      <Heading color="accent" fontSize="22px" fontWeight={500} mb={2} textAlign="center">
        Время работы магазина:
      </Heading>
      <Text textAlign="center">Ежедневно с 11:00 до 19:00</Text>
      <Heading color="accent" fontSize="22px" fontWeight={500} mb={2} mt={4} textAlign="center">
        Время принятия заказов online:
      </Heading>
      <Text textAlign="center">Ежедневно с 11:00 до 19:00</Text>
      <Box mt={4}>
        <Text>
          © Веб-приложение интернет-магазина workshop nina ИП «Милентьева А.С.» Адрес: 246017, Республика Беларусь,
          Гомель, ул. Гагарина 55Б
        </Text>
      </Box>
    </Box>
  </HStack>
)

export { Footer }

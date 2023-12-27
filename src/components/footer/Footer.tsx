import { Box, HStack, Heading, Link, List, ListItem, Text } from "@chakra-ui/react"

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
      <Heading color="accent" fontSize="22px" fontWeight={600} mb="10px" textTransform="uppercase">
        workshop nina
      </Heading>
      <Text mb={2}>г. Гомель, ул. Советская 23</Text>
      <Text mb={2}>+375(29)555-55-55</Text>
      <Text>gospodipomogi@gmail.com</Text>
    </Box>
    <Box>
      <Heading color="accent" fontSize="22px" fontWeight={600} mb="10px">
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
      <Heading color="accent" fontSize="22px" fontWeight={600} mb="10px">
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
      <Heading color="accent" fontSize="22px" fontWeight={600} mb="10px">
        Частые вопросы
      </Heading>
      <List>
        <Link variant="footermenu">
          <ListItem>Как какать?</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>2+2=?</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Теорема Пифагора</ListItem>
        </Link>
        <Link variant="footermenu">
          <ListItem>Какой камбэк у ВР?</ListItem>
        </Link>
      </List>
    </Box>
    <Box maxW="450px">
      <Heading color="accent" fontSize="22px" fontWeight={600} mb="10px">
        Время работы магазина:
      </Heading>
      <Text>Каждый день с 11:00 до 19:00</Text>
      <Heading color="accent" fontSize="22px" fontWeight={600} mb="10px" mt={4}>
        Время принятия заказов online:
      </Heading>
      <Text>Каждый день с 11:00 до 19:00</Text>
      <Box>
        <Text>
          © Веб-приложение интернет-магазина workshop nina ООО «ыавыва» УНП 26576970 Адрес: 357970, Республика
          Беларусь, Гомель, проспект ва9кшлвзпа, д. 2
        </Text>
      </Box>
    </Box>
  </HStack>
)

export { Footer }

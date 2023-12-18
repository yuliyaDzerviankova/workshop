import { Box, HStack, Heading, Link, List, ListItem, Text } from "@chakra-ui/react"

const Footer = () => (
  <HStack
    alignItems="flex-start"
    bgColor="link"
    gap="2rem"
    justifyContent="space-between"
    px="100px"
    py="60px"
    width="100%"
  >
    <Box>
      <Heading color="accent" fontSize="32px" mb="20px" textTransform="uppercase">
        workshop nina
      </Heading>
      <Text mb="20px">г. Гомель, ул. Советская 23</Text>
      <Text mb="20px">+375(29)555-55-55</Text>
      <Text>gospodipomogi@gmail.com</Text>
    </Box>
    <Box>
      <Heading color="accent" fontSize="24px" mb="20px">
        Навигация
      </Heading>
      <List>
        <Link>
          <ListItem>Главная</ListItem>
        </Link>
        <Link>
          <ListItem>Каталог</ListItem>
        </Link>
        <Link>
          <ListItem>Контакты</ListItem>
        </Link>
        <Link>
          <ListItem>Личный кабинет</ListItem>
        </Link>
      </List>
    </Box>
    <Box>
      <Heading color="accent" fontSize="24px" mb="20px">
        Каталог
      </Heading>
      <List>
        <Link>
          <ListItem>Цветы</ListItem>
        </Link>
        <Link>
          <ListItem>Уходовое</ListItem>
        </Link>
        <Link>
          <ListItem>Для дома</ListItem>
        </Link>
        <Link>
          <ListItem>Свечи и дифузоры</ListItem>
        </Link>
      </List>
    </Box>
    <Box>
      <Heading color="accent" fontSize="24px" mb="20px">
        Частые вопросы
      </Heading>
      <List>
        <Link>
          <ListItem>Как какать?</ListItem>
        </Link>
        <Link>
          <ListItem>2+2=?</ListItem>
        </Link>
        <Link>
          <ListItem>Теорема Пифагора</ListItem>
        </Link>
        <Link>
          <ListItem>Какой камбэк у ВР?</ListItem>
        </Link>
      </List>
    </Box>
    <Box>
      <Heading color="accent" fontSize="24px" mb="20px">
        Время работы магазина:
      </Heading>
      <Text>Каждый день с 11:00 до 19:00</Text>
      <Heading color="accent" fontSize="24px" mb="20px">
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

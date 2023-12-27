import { ArrowForwardIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, Grid, GridItem, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react"

import {
  BodycareIcon,
  BoxesIcon,
  CandleIcon,
  Flower,
  FlowersIcon,
  HomeIcon,
  Korka,
  Logo,
  PhoneIcon,
  Rectangle,
} from "../../assets"
import { Footer, Header } from "components"

const Main = () => (
  <Stack alignItems="flex-start" background="whiteMain" flex={1} width="100%">
    <Header />
    <Flex align="center" justify="space-between" px="100px" py="34px" width="100%">
      <Text color="#A77E50" fontSize="18px">
        Досталяем прекрасное по Гомелю и Беларуси!
      </Text>
      <Flex align="center">
        <PhoneIcon height="30px" mr={1} width="30px" />
        <Text color="#A77E50" fontSize="18px">
          +375293195299
        </Text>
      </Flex>
    </Flex>

    <VStack fontSize="40px" gap={0} w="100%">
      <Flex flex={1} w="100%">
        <Box flex={1} pos="relative">
          <ChevronLeftIcon
            _hover={{
              transform: "scale(1.2)",
            }}
            color="whiteMain"
            left={0}
            pos="absolute"
            top="45%"
          />
          <Image src={FlowersIcon} />
          <ChevronRightIcon
            _hover={{
              transform: "scale(1.2)",
            }}
            color="whiteMain"
            pos="absolute"
            right={0}
            top="45%"
          />
        </Box>
        <Flex align="center" bgColor="grayMain" flex={1} justify="center">
          <Text color="#FFF" textAlign="center">
            Цветы
          </Text>
        </Flex>
      </Flex>
      <Flex flex={1} w="100%">
        <Flex align="center" bgColor="grayMain" flex={1} justify="center">
          <Text color="#FFF" textAlign="center">
            Уход за телом
          </Text>
        </Flex>
        <Box flex={1}>
          <Image src={BodycareIcon} />
        </Box>
      </Flex>
      <Flex flex={1} w="100%">
        <Box flex={1}>
          <Image src={CandleIcon} />
        </Box>
        <Flex align="center" bgColor="grayMain" flex={1} justify="center">
          <Text color="#FFF" textAlign="center">
            Свечи и диффузоры
          </Text>
        </Flex>
      </Flex>
      <Flex flex={1} w="100%">
        <Flex align="center" bgColor="grayMain" flex={1} justify="center">
          <Text color="#FFF" textAlign="center">
            Для дома и красоты
          </Text>
        </Flex>
        <Box flex={1}>
          <Image src={HomeIcon} />
        </Box>
      </Flex>
      <Flex flex={1} w="100%">
        <Box flex={1}>
          <Image src={BoxesIcon} />
        </Box>
        <Flex align="center" bgColor="grayMain" flex={1} justify="center">
          <Text color="#FFF" textAlign="center">
            Боксы в подарок
          </Text>
        </Flex>
      </Flex>
    </VStack>

    <VStack pt="80px" px="100px">
      <Heading fontWeight={600} textAlign="left" width="100%">
        Популярное
      </Heading>
      <Flex mt={5}>
        <Image maxH="350px" pr="20px" src={Rectangle} />
        <Box pr="20px">
          <Image pb="20px" src={Korka} width="560px" />
          <Image src={Korka} width="560px" />
        </Box>
        <Box>
          <Image pb="20px" src={Flower} />
          <Image src={Flower} />
        </Box>
      </Flex>
    </VStack>

    <Stack alignItems="center" bgColor="grayMain" gap="20px" mt="70px" pb="30px" pt="20px" width="100%">
      <Heading fontSize="30px" fontWeight="600" textAlign="center">
        Онлайн-витрина
      </Heading>
      <Text textAlign="center">Выберите букет по вашим предпочтениям прямо сейчас!</Text>
      <Box alignItems="center" display="flex" mt="20px">
        <Link color="link" fontSize="20px" textAlign="center">
          Посмотреть
        </Link>
        <ArrowForwardIcon color="link" ml="10px" width="20px" />
      </Box>
    </Stack>

    <Stack pt="70px" px="100px" width="100%">
      <Heading fontSize="40px" fontWeight="600" mb="40px">
        Отзывы
      </Heading>
      <Grid gap={5} templateColumns="repeat(3, 1fr)">
        <GridItem
          bgColor="#AF814D"
          borderBottomLeftRadius={0}
          borderBottomRightRadius="20px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          px={8}
          py={7}
        >
          <Flex alignItems="center" justify="space-between" mb="40px">
            <Text color="whiteMain" fontSize="2xl" fontWeight={500}>
              Дмитрий
            </Text>
            <Link color="blackOpacity">
              перейти к товару <ArrowForwardIcon color="blackOpacity" ml={2} width="20px" />
            </Link>
          </Flex>
          <Text color="whiteMain" fontSize="sm" fontWeight={400}>
            Я полностью доволен опытом покупки в интернет-магазине. Легкое и интуитивно понятное приложение. Заказал
            прекрасный букет для своей возлюбленной.
          </Text>
        </GridItem>
        <GridItem
          bgColor="#F6E5B9"
          borderBottomLeftRadius={0}
          borderBottomRightRadius="20px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          px={8}
          py={7}
        >
          <Flex alignItems="center" justify="space-between" mb="40px">
            <Text color="blackMain" fontSize="2xl" fontWeight={500}>
              Аркадий
            </Text>
            <Link color="blackOpacity">
              перейти к товару <ArrowForwardIcon color="blackOpacity" ml={2} width="20px" />
            </Link>
          </Flex>
          <Text fontSize="sm" fontWeight={400}>
            Цены в Nina приятные, а качество цветов всегда на высоте. Очень доволен своими покупками.
          </Text>
        </GridItem>
        <GridItem
          bgColor="skin"
          borderBottomLeftRadius={0}
          borderBottomRightRadius="20px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          px={8}
          py={7}
        >
          <Flex alignItems="center" justify="space-between" mb="40px">
            <Text color="blackMain" fontSize="2xl" fontWeight={500}>
              Ибрагим
            </Text>
            <Link color="blackOpacity">
              перейти к товару <ArrowForwardIcon color="blackOpacity" ml={2} width="20px" />
            </Link>
          </Flex>
          <Text fontSize="sm" fontWeight={400}>
            Здесь можно найти редкие и экзотические цветы. Они всегда удивляют своим ассортиментом.
          </Text>
        </GridItem>
      </Grid>
    </Stack>

    <Stack
      bgColor="grayMain"
      direction="row"
      justifyContent="space-between"
      mt="70px"
      px="100px"
      py="30px"
      width="100%"
    >
      <Flex direction="column">
        <Heading>Остались вопросы?</Heading>
        <Text>Позвоните или приходите к нам!</Text>
        <Box>
          <Link>Наши контактные данные</Link>
          <ArrowForwardIcon color="link" />
        </Box>
      </Flex>
      <Flex direction="column" maxW="30%">
        <Image maxW="300px" src={Logo} />
        <Text color="blackMain" fontWeight={400}>
          Workshop of flowers and aesthetic things
        </Text>
      </Flex>
    </Stack>

    <Stack direction="row" justify="space-between" px="100px" py="30px" width="100%">
      <Text>so.warm</Text>
      <Text>ECO.EVA.DESIGN</Text>
      <Text>PURELY CARE</Text>
      <Text>ZOYA</Text>
      <Text>D. Engel</Text>
      <Text>ВРЕМЕ-НАМИ</Text>
    </Stack>

    <Footer />
  </Stack>
)

export { Main }

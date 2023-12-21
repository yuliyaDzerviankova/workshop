import { ArrowForwardIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react"

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

const Home = () => (
  <Stack alignItems="flex-start" flex={1} width="100%">
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
      <Heading>Популярное</Heading>
      <Flex>
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
      <Flex flex="1" justify="space-between" width="100%">
        <Box
          bgColor="#AF814D"
          borderBottomLeftRadius={0}
          borderBottomRightRadius="20px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          p="40px"
        >
          <Flex justify="space-between" mb="40px">
            <Text color="whiteMain" fontSize="24px">
              Ефросиния
            </Text>
            <Flex align="center" justify="space-between">
              <Link>перейти к товару</Link>
              <ArrowForwardIcon color="link" ml="10px" width="20px" />
            </Flex>
          </Flex>
          <Text color="whiteMain">
            Заходит как-то улитка в бар и говорит: “Бармен, налей мне стакан воды. Бармен наливает стакан воды и отдает
            улитке, а та забирает его и уходит.
          </Text>
        </Box>

        <Box
          bgColor="#F6E5B9"
          borderBottomLeftRadius={0}
          borderBottomRightRadius="20px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          ml="20px"
          p="40px"
        >
          <Flex justify="space-between" mb="40px">
            <Text color="black" fontSize="24px">
              Аркадий
            </Text>
            <Flex align="center" justify="space-between">
              <Link>перейти к товару</Link>
              <ArrowForwardIcon color="link" ml="10px" width="20px" />
            </Flex>
          </Flex>
          <Text>
            Через неделю улитка снова приходит в бар и просит у бармена стакан с водой. Тот без вопросов наливает и
            отдает. Улитка снова уходит.
          </Text>
        </Box>

        <Box
          bgColor="#F2C0AC"
          borderBottomLeftRadius={0}
          borderBottomRightRadius="20px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          ml="20px"
          p="40px"
        >
          <Flex justify="space-between" mb="40px">
            <Text color="whiteMain" fontSize="24px">
              Ибрагим
            </Text>
            <Flex align="center" justify="space-between">
              <Link>перейти к товару</Link>
              <ArrowForwardIcon color="link" ml="10px" width="20px" />
            </Flex>
          </Flex>
          <Text>
            Через неделю улитка возвращается и снова просит стакан воды, бармен спрашивает, зачем вообще улитке вода.
            Она отвечает: “Да у меня дом горит просто”.
          </Text>
        </Box>
      </Flex>
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
        <Text>и какая-нибудь подпись прикольная.</Text>
      </Flex>
    </Stack>

    <Stack direction="row" justify="space-between" px="100px" py="30px" width="100%">
      <Text>здесь можно</Text>
      <Text>оставить названия</Text>
      <Text>брендов</Text>
      <Text>с которыми</Text>
      <Text>сотрудничает</Text>
      <Text>магазин</Text>
    </Stack>

    <Footer />
  </Stack>
)

export { Home }

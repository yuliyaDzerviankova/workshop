import { ArrowForwardIcon, StarIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react"

type Feedback = {
  id: string
  stars: number
  date: string
  text: string
}

const Feedbacks = () => {
  const feedbacks: Feedback[] = [
    {
      id: "1",
      stars: 5,
      date: "12.10.2022 12:56",
      text: "Заходит как-то улитка в бар и говорит: “Бармен, налей мне стакан воды. Бармен наливает стакан воды и отдает улитке, а та забирает его и уходит.",
    },
    {
      id: "2",
      stars: 5,
      date: "12.10.2022 12:56",
      text: "Заходит как-то улитка в бар и говорит: “Бармен, налей мне стакан воды. Бармен наливает стакан воды и отдает улитке, а та забирает его и уходит.",
    },
    {
      id: "3",
      stars: 5,
      date: "12.10.2022 12:56",
      text: "Заходит как-то улитка в бар и говорит: “Бармен, налей мне стакан воды. Бармен наливает стакан воды и отдает улитке, а та забирает его и уходит.",
    },
  ]

  return (
    <Stack>
      <Heading fontSize={18} fontWeight={600}>
        Ваши отзывы
      </Heading>
      {/*<Flex justify="space-between" mt={4} width="50%">*/}
      {/*  <Text color="error">Отзывов нет.</Text>*/}
      {/*  <Link color="link">*/}
      {/*    Перейти в каталог*/}
      {/*    <ArrowForwardIcon ml={2} />*/}
      {/*  </Link>*/}
      {/*</Flex>*/}
      <VStack>
        {feedbacks.map((feedback) => (
          <Box key={feedback.id} background="skin" p={3} width="100%">
            <Flex align="flex-start" justify="space-between">
              <Box>
                {Array.from({ length: feedback.stars }, () => (
                  <StarIcon key={feedback.id} _notFirst={{ ml: 2 }} color="#6D3293" />
                ))}
                <Text fontSize="14px" mt={2}>
                  {feedback.date}
                </Text>
              </Box>
              <Link color="rgba(22, 2, 2, 0.50)" textDecoration="underline">
                перейти к товару <ArrowForwardIcon ml={2} />
              </Link>
            </Flex>
            <Text mt={5}>{feedback.text}</Text>
          </Box>
        ))}
      </VStack>
    </Stack>
  )
}

export { Feedbacks }

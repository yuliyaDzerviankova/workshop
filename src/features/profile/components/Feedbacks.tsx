import { ArrowForwardIcon } from "@chakra-ui/icons"
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
      <Flex justify="space-between" mt={4} width="50%">
        <Text color="error">Отзывов нет.</Text>
        <Link color="link">
          Перейти в каталог
          <ArrowForwardIcon ml={2} />
        </Link>
      </Flex>
      <VStack>
        {feedbacks.map((feedback) => (
          <Box key={feedback.id} background="skin" width="100%" p={3}>
            <Text>{feedback.date}</Text>
          </Box>
        ))}
      </VStack>
    </Stack>
  )
}

export { Feedbacks }

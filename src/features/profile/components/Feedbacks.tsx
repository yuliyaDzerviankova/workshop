import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react"

import { FilledStarsIcon } from "../../../assets"

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
      text: "Спасибо Вам большое за цветы, дарила своей маме, ей очень они понравились!",
    },
    {
      id: "2",
      stars: 5,
      date: "12.10.2022 12:56",
      text: "Это место, где цветы превращаются в настоящие произведения искусства. Они создают уникальные композиции, которые всегда вызывают восхищение.",
    },
    {
      id: "3",
      stars: 5,
      date: "12.10.2022 12:56",
      text: "Осталась очень довольна качеством продукции. Эффект маски впечатляет.",
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
      <VStack mt={4}>
        {feedbacks.map((feedback) => (
          <Box key={feedback.id} background="skin" p={3} width="100%">
            <Flex align="flex-start" justify="space-between">
              <Box>
                {Array.from({ length: feedback.stars }, () => (
                  <FilledStarsIcon key={feedback.id} _notFirst={{ ml: 2 }} />
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

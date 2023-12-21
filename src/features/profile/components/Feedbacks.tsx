import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, Heading, Link, Stack, Text } from "@chakra-ui/react"

const Feedbacks = () => (
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
  </Stack>
)

export { Feedbacks }

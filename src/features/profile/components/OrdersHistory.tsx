import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, Heading, Link, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"

const OrdersHistory = () => (
  <Stack>
    <Heading fontSize={18} fontWeight={600}>
      История заказов
    </Heading>
    <Flex justify="space-between" mt={4} width="50%">
      <Text color="error">История заказов пуста.</Text>
      <Link color="link">
        Перейти в каталог
        <ArrowForwardIcon ml={2} />
      </Link>
    </Flex>
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th color="link">Дата оформления</Th>
            <Th color="link">Номер заказа</Th>
            <Th color="link">Статус заказа</Th>
            <Th color="link">Оплата</Th>
            <Th color="link">Сумма заказа</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td py={2.5}>25.05.2022 20:23</Td>
            <Td py={2.5}>220898</Td>
            <Td py={2.5}>Выполнен</Td>
            <Td py={2.5}>Оплачен</Td>
            <Td py={2.5} textAlign="right">
              123 руб.
            </Td>
          </Tr>
          <Tr>
            <Td py={2.5}>25.05.2022 20:19</Td>
            <Td py={2.5}>220897</Td>
            <Td py={2.5}>Отменен</Td>
            <Td py={2.5}>Не оплачен</Td>
            <Td py={2.5} textAlign="right">
              123 руб.
            </Td>
          </Tr>
          <Tr>
            <Td py={2.5}>12.10.2022 12:56</Td>
            <Td py={2.5}>57368</Td>
            <Td py={2.5}>Выполнен</Td>
            <Td py={2.5}>Оплачен</Td>
            <Td py={2.5} textAlign="right">
              23 руб.
            </Td>
          </Tr>
        </Tbody>
      </Table>
      <Flex alignItems="center" display="flex" justifyContent="flex-end" mt={5} width="100%">
        <Text>Сумма выполненных заказов:</Text>
        <Text fontWeight={600} ml={5} pr={6}>
          146 руб.
        </Text>
      </Flex>
    </TableContainer>
  </Stack>
)

export { OrdersHistory }

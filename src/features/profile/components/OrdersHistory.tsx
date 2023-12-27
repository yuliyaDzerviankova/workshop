import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Flex, Heading, Link, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"

type Order = {
  orderId: string
  orderDate: string
  orderNumber: string
  status: string
  isPaid: string
  price: string
}

const OrdersHistory = () => {
  const orders: Order[] = [
    {
      orderId: "1",
      orderDate: "25.05.2022 20:23",
      orderNumber: "220898",
      status: "Выполнен",
      isPaid: "Оплачен",
      price: "123 руб.",
    },
    {
      orderId: "2",
      orderDate: "25.05.2022 20:19",
      orderNumber: "220898",
      status: "Отменен",
      isPaid: "Не оплачен",
      price: "123 руб.",
    },
    {
      orderId: "3",
      orderDate: "12.10.2022 12:56",
      orderNumber: "57368",
      status: "Выполнен",
      isPaid: "Оплачен",
      price: "23 руб.",
    },
  ]

  return (
    <Stack>
      <Heading fontSize={18} fontWeight={600}>
        История заказов
      </Heading>
      {/*<Flex justify="space-between" mt={4} width="50%">*/}
      {/*  <Text color="error">История заказов пуста.</Text>*/}
      {/*  <Link color="link">*/}
      {/*    Перейти в каталог*/}
      {/*    <ArrowForwardIcon ml={2} />*/}
      {/*  </Link>*/}
      {/*</Flex>*/}
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
            {orders?.map((order: Order) => (
              <Tr key={order.orderId} _hover={{ background: "grayOpacity", cursor: "pointer" }}>
                <Td py={2.5}>{order.orderDate}</Td>
                <Td py={2.5}>{order.orderNumber}</Td>
                <Td py={2.5}>{order.status}</Td>
                <Td py={2.5}>{order.isPaid}</Td>
                <Td py={2.5} textAlign="right">
                  {order.price}
                </Td>
              </Tr>
            ))}
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
}

export { OrdersHistory }

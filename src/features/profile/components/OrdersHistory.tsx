import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Flex,
  Heading,
  Link,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"

import { OrderDetailModal } from "./OrderDetailModal"
import { ordersHistory } from "../../../mocks"
import { Order } from "../../../models"

const OrdersHistory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [order, setOrder] = useState<Order>({
    orderId: "",
    orderDate: "",
    orderNumber: "",
    orderDescription: "",
    status: "",
    isPaid: "",
    paymentType: "",
    deliveryType: "",
    price: 0,
    trackNumber: "",
    ownAddress: "",
    recipient: "",
  })

  return (
    <Stack>
      <Heading fontSize={18} fontWeight={600}>
        История заказов
      </Heading>
      {ordersHistory && ordersHistory.length > 0 ? (
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
              {ordersHistory?.map((order: Order) => (
                <Tr
                  key={order.orderId}
                  _hover={{ background: "grayOpacity", cursor: "pointer" }}
                  onClick={() => {
                    setOrder(order)
                    onOpen()
                  }}
                >
                  <Td py={2.5}>{order.orderDate}</Td>
                  <Td py={2.5}>{order.orderNumber}</Td>
                  <Td py={2.5}>{order.status}</Td>
                  <Td py={2.5}>{order.isPaid}</Td>
                  <Td py={2.5} textAlign="right">
                    {order.price} руб.
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
      ) : (
        <Flex justify="space-between" mt={4} width="50%">
          <Text color="error">История заказов пуста.</Text>
          <Link color="link">
            Перейти в каталог
            <ArrowForwardIcon ml={2} />
          </Link>
        </Flex>
      )}

      <OrderDetailModal isOpen={isOpen} order={order} onClose={onClose} />
    </Stack>
  )
}

export { OrdersHistory }

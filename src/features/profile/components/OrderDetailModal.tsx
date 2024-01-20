import {
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react"

import { Order } from "../../../models"

type Props = {
  order: Order
  isOpen: boolean
  onClose: () => void
}

const OrderDetailModal = ({ order, onClose, isOpen }: Props) => (
  <Modal isOpen={isOpen} size="4xl" onClose={onClose}>
    <ModalOverlay />
    <ModalContent px={5} py={8}>
      <ModalCloseButton onClick={onClose} />
      <ModalHeader>
        <Heading fontSize="2xl" fontWeight={500}>
          Заказ № {order.orderNumber}
        </Heading>
      </ModalHeader>
      <ModalBody>
        <Heading borderBottomColor="link" borderBottomWidth={1} fontSize="md" fontWeight={500}>
          Информация о заказе
        </Heading>
        <Stack gap={4} py={5}>
          <Flex width="100%">
            <Text color="link" flex={1.5}>
              Дата оформления
            </Text>
            <Text flex={2}>{order.orderDate}</Text>
          </Flex>
          <Flex width="100%">
            <Text color="link" flex={1.5}>
              Состав заказа
            </Text>
            <Text flex={2}>{order.orderDescription}</Text>
          </Flex>
          <Flex width="100%">
            <Text color="link" flex={1.5}>
              Сумма
            </Text>
            <Text flex={2}>{order.price} руб.</Text>
          </Flex>
          <Flex width="100%">
            <Text color="link" flex={1.5}>
              Статус и оплата
            </Text>
            <Text flex={2}>
              {order.status} {order.isPaid}
            </Text>
          </Flex>
          <Flex align="center" width="100%">
            <Text color="link" flex={1.5}>
              Способ оплаты
            </Text>
            <Text flex={2}>{order.paymentType}</Text>
          </Flex>
          <Flex width="100%">
            <Text color="link" flex={1.5}>
              Способ доставки
            </Text>
            <Text flex={2}>{order.deliveryType}</Text>
          </Flex>
          <Flex width="100%">
            <Text color="error" flex={1.5}>
              Трек-номер отслеживания
            </Text>
            <Text flex={2} fontWeight={600}>
              {order.trackNumber}
            </Text>
          </Flex>
          <Flex width="100%">
            <Text color="link" flex={1.5}>
              Адрес места для самовывоза
            </Text>
            <Text flex={2}>{order.ownAddress}</Text>
          </Flex>
          <Flex width="100%">
            <Text color="link" flex={1.5}>
              Получатель
            </Text>
            <Text flex={2}>{order.recipient}</Text>
          </Flex>
        </Stack>
      </ModalBody>
    </ModalContent>
  </Modal>
)

export { OrderDetailModal }

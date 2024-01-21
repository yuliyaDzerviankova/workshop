import {
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"

import { CircleSolidIcon } from "../../../../assets"

type Props = {
  isOpen: boolean
  onClose: () => void
}

const DeliveryInfoModal = ({ isOpen, onClose }: Props) => (
  <Modal isOpen={isOpen} size="xl" isCentered onClose={onClose}>
    <ModalOverlay />
    <ModalContent pt={5} px={3}>
      <ModalCloseButton />
      <ModalHeader fontSize="xl" fontWeight={700} textAlign="center">
        Доставка
      </ModalHeader>
      <ModalBody>
        <List>
          <ListItem fontWeight={500} mb={2}>
            <ListIcon as={CircleSolidIcon} width={2.5} />
            Доставка цветов осуществляется только по Гомелю.
          </ListItem>
          <ListItem fontWeight={500} mb={2}>
            <ListIcon as={CircleSolidIcon} width={2.5} />
            Стоимость доставки рассчитывается исходя из размера букета.
          </ListItem>
          <ListItem fontWeight={500} mb={2}>
            <ListIcon as={CircleSolidIcon} width={2.5} />
            Бесплатная доставка возможна при заказе от 200 р.
          </ListItem>
          <ListItem fontWeight={500} mb={2}>
            <ListIcon as={CircleSolidIcon} width={2.5} />
            Доставка прочей продукции возможна по территории Беларуси службой Европочта.
          </ListItem>
          <ListItem fontWeight={500} mb={2}>
            <ListIcon as={CircleSolidIcon} width={2.5} />
            Стоимость рассчитывается в зависимости от упаковки и веса посылки.
          </ListItem>
        </List>
        <ModalFooter justifyContent="center">
          <Text mr={2}>Остались вопросы?</Text>
          <Text fontWeight={700}>Позвоните нам!</Text>
        </ModalFooter>
      </ModalBody>
    </ModalContent>
  </Modal>
)

export { DeliveryInfoModal }

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
const PaymentInfoModal = ({ isOpen, onClose }: Props) => (
  <Modal isOpen={isOpen} size="xl" isCentered onClose={onClose}>
    <ModalOverlay />
    <ModalContent pt={5} px={3}>
      <ModalCloseButton />
      <ModalHeader fontSize="xl" fontWeight={700} textAlign="center">
        Оплата
      </ModalHeader>
      <ModalBody>
        <List>
          <ListItem fontWeight={500} mb={2}>
            <ListIcon as={CircleSolidIcon} width={2.5} />
            Оплата при самовывозе производится как в магазине, так и на сайте.
          </ListItem>
          <ListItem fontWeight={500} mb={2}>
            <ListIcon as={CircleSolidIcon} width={2.5} />
            Способы оплаты: наличный (только в магазине) и безналичиный картами Visa, Mastercard, МИР и т.п.
          </ListItem>
          <ListItem fontWeight={500} mb={2}>
            <ListIcon as={CircleSolidIcon} width={2.5} />
            При доставке в другой город или населенный пункт, товар нужно оплатить онлайн на сайте.
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

export { PaymentInfoModal }

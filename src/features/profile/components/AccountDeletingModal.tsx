import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react"

type Props = {
  isOpen: boolean
  onClose: () => void
  onClick: () => void
}

const AccountDeletingModal = ({ isOpen, onClose, onClick }: Props) => (
  <Modal isOpen={isOpen} size="md" isCentered onClose={onClose}>
    <ModalOverlay />
    <ModalContent p="40px">
      <ModalCloseButton />
      <ModalBody p={0}>
        <Heading fontSize="20px" fontWeight={700} mb={5} textAlign="center">
          Хотите удалить аккаунт?
        </Heading>
        <Text color="blackMain">
          Вы уверены в том, что хотите удалить аккаунт? Данное действие необратимо и все ваши данные будут утеряны
          навсегда.
        </Text>
      </ModalBody>
      <ModalFooter alignItems="center" display="flex" justifyContent="space-between" mt="30px" p={0} width="100%">
        <Button background="grayMain" color="whiteMain" w="150px" onClick={onClose}>
          Назад
        </Button>
        <Button w="150px" onClick={onClick}>Удалить</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)

export { AccountDeletingModal }

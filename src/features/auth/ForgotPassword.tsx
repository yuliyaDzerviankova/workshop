import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
  const navigate = useNavigate()
  const { onClose, isOpen, onOpen } = useDisclosure()

  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <Stack bg="whiteMain" borderRadius="10px" width="450px">
        <Box borderBottomColor="grayMain" borderBottomWidth="1px" py={4}>
          <Text fontSize="xl" fontWeight={600} textAlign="center" textTransform="uppercase">
            workshop nina
          </Text>
        </Box>
        <Flex direction="column" pb="60px" pt={4} px="50px">
          <Text color="blackMain" fontSize="xl" fontWeight={500} textAlign="center">
            Забыли пароль?
          </Text>
          <Stack as="form" pt={6}>
            <FormControl my={4}>
              <FormLabel color="blackMain" mb={2} mr="auto" requiredIndicator>
                Введите зарегистрированный номер телефона
              </FormLabel>
              <Input mb={3} placeholder="+375" width="100%" />
              <FormHelperText color="gray" fontSize="sm" fontWeight={500}>
                В течение нескольких минут на Ваш номер телефона придет сообщение c одноразовым паролем для входа,
                который можно будет изменить в личном кабинете.
              </FormHelperText>
              {/*<FormHelperText color="error" fontSize="sm" fontWeight={500} mb={3}>*/}
              {/*  Номер телефона не зарегистрирован*/}
              {/*</FormHelperText>*/}
              {/*<FormHelperText color="error" fontSize="sm" fontWeight={500}>*/}
              {/*  Введите номер телефона*/}
              {/*</FormHelperText>*/}
            </FormControl>
            <Button bg="accent" color="blackMain" fontWeight={500} height="46px" onClick={onOpen}>
              Выслать пароль
            </Button>
            <Text color="grayMain" textAlign="center">
              или
            </Text>
            <Link
              color="link"
              fontWeight={500}
              textAlign="center"
              textDecoration="underline"
              variant="ghost"
              onClick={() => navigate("/register")}
            >
              Зарегистрироваться
            </Link>
          </Stack>
        </Flex>

        <Modal isOpen={isOpen} size="xl" isCentered onClose={onClose}>
          <ModalOverlay />
          <ModalContent p="40px">
            <ModalBody alignItems="center" display="flex" flexDirection="column" justifyContent="center">
              <Heading color="blackMain" fontSize="20px" fontWeight={600} mb={5} textAlign="center">
                Одноразовый пароль выслан!
              </Heading>
              <Text color="blackMain" fontWeight={500} mb={6} textAlign="center">
                Вы можете использовать его для входа, а после изменить в личном кабинете.
              </Text>
              <Link color="link" onClick={() => navigate("/signin")}>
                войти в свой аккаунт <ArrowForwardIcon />
              </Link>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Stack>
    </Stack>
  )
}

export { ForgotPassword }

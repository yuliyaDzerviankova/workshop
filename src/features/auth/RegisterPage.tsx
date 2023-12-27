import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, Link, Stack, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const navigate = useNavigate()

  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <Stack bg="grayMain" borderRadius="10px" gap={0} width="450px">
        <Box borderBottomColor="grayMain" borderBottomWidth="1px" py={4}>
          <Text fontSize="20px" fontWeight={600} textAlign="center" textTransform="uppercase">
            workshop nina
          </Text>
        </Box>
        <Flex direction="column" pb="60px" pt="20px" px="50px">
          <Text color="blackMain" fontSize="20px" fontWeight={500} textAlign="center">
            Добро пожаловать!
          </Text>
          <Stack as="form" pt={5}>
            <FormControl mb={4}>
              <FormLabel>Номер телефона</FormLabel>
              <Input placeholder="+375" width="100%" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Пароль</FormLabel>
              <Input placeholder="Ireumeun_JK" width="100%" />
              <FormHelperText color="link" fontSize="xs">
                Минимум 8 символов, латинскими буквами, разрешено использование символов *, _ и -.
              </FormHelperText>
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Повторите пароль</FormLabel>
              <Input placeholder="Введите пароль" width="100%" />
            </FormControl>
            <FormControl mb="40px">
              <FormLabel alignItems="center" display="flex" justifyContent="space-between">
                <Text color="#241111">Проверочный код</Text>
                <Link color="#828282" textDecoration="underline">
                  Выслать код
                </Link>
              </FormLabel>
              <Input placeholder="234567" width="100%" />
              <FormHelperText color="link" fontSize="xs">
                В течении нескольких минут на ваш номер телефона придет сообщение с кодом.
              </FormHelperText>
            </FormControl>
            <Button bg="#DEEC00" color="#160202" fontWeight="normal" height="46px" onClick={() => navigate("/")}>
              Зарегистрироваться
            </Button>
            <Text color="#C6C5C5" textAlign="center">
              или
            </Text>
            <Link
              color="#828282"
              fontWeight="normal"
              textAlign="center"
              textDecoration="underline"
              variant="ghost"
              onClick={() => navigate("/signin")}
            >
              Войти в аккаунт
            </Link>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  )
}

export { RegisterPage }

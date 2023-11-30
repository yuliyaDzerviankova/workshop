import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, Link, Stack, Text } from "@chakra-ui/react"

const RegisterPage = () => (
  <Stack bg="#FAF6F6" borderRadius="10px" maxW="40%" minW="30%">
    <Box borderBottomColor="#C6C5C5" borderBottomWidth="1px" py="18px">
      <Text fontSize="20px" fontWeight="bold" textAlign="center" textTransform="uppercase">
        workshop nina
      </Text>
    </Box>
    <Flex direction="column" pb="60px" pt="20px" px="50px">
      <Text fontSize="20px" textAlign="center">
        Добро пожаловать!
      </Text>
      <Stack as="form" pt="30px">
        <FormControl mb="20px">
          <FormLabel color="#241111" mb="10px">
            Номер телефона
          </FormLabel>
          <Input placeholder="+375" width="100%" />
        </FormControl>
        <FormControl mb="20px">
          <FormLabel color="#241111" mb="10px">
            Пароль
          </FormLabel>
          <Input placeholder="Ireumeun_JK" width="100%" />
          <FormHelperText color="link" fontSize="sm">
            Минимум 8 символов, латинскими буквами, разрешено использование символов *, _ и -.
          </FormHelperText>
        </FormControl>
        <FormControl mb="20px">
          <FormLabel color="#241111" mb="10px">
            Повторите пароль
          </FormLabel>
          <Input placeholder="Введите пароль" width="100%" />
        </FormControl>
        <FormControl mb="40px">
          <FormLabel alignItems="center" display="flex" justifyContent="space-between" mb="10px">
            <Text color="#241111">Проверочный код</Text>
            <Link color="#828282" textDecoration="underline">
              Выслать код
            </Link>
          </FormLabel>
          <Input placeholder="234567" width="100%" />
          <FormHelperText color="link" fontSize="sm">
            В течении нескольких минут на ваш номер телефона придет сообщение с кодом.
          </FormHelperText>
        </FormControl>
        <Button bg="#DEEC00" color="#160202" fontWeight="normal" height="46px">
          Зарегистрироваться
        </Button>
        <Text color="#C6C5C5" textAlign="center">
          или
        </Text>
        <Link color="#828282" fontWeight="normal" textAlign="center" textDecoration="underline" variant="ghost">
          Войти в аккаунт
        </Link>
      </Stack>
    </Flex>
  </Stack>
)

export { RegisterPage }

import { Box, Button, Flex, FormControl, FormLabel, Input, Link, Stack, Text } from "@chakra-ui/react"

const SignInPage = () => (
  <Stack bg="#FAF6F6" borderRadius="10px" maxW="50%" minW="30%">
    <Box borderBottomColor="#C6C5C5" borderBottomWidth="1px" py="18px">
      <Text fontSize="20px" fontWeight="bold" textAlign="center" textTransform="uppercase">
        workshop nina
      </Text>
    </Box>
    <Flex direction="column" pb="60px" pt="20px" px="50px">
      <Text fontSize="20px" textAlign="center">
        С возвращением!
      </Text>
      <Stack as="form" pt="30px">
        <FormControl mb="20px">
          <FormLabel color="#241111" mb="10px">
            Номер телефона
          </FormLabel>
          <Input placeholder="+375" width="100%" />
        </FormControl>
        <FormControl mb="40px">
          <FormLabel alignItems="center" display="flex" justifyContent="space-between" mb="10px">
            <Text color="#241111">Пароль</Text>
            <Link color="#828282" textDecoration="underline">
              Забыли?
            </Link>
          </FormLabel>
          <Input placeholder="Введите пароль" width="100%" />
        </FormControl>
        <Button bg="#DEEC00" color="#160202" fontWeight="normal" height="46px">
          Войти в аккаунт
        </Button>
        <Text color="#C6C5C5" textAlign="center">
          или
        </Text>
        <Link color="#828282" fontWeight="normal" textAlign="center" textDecoration="underline" variant="ghost">
          Зарегистрироваться
        </Link>
      </Stack>
    </Flex>
  </Stack>
)

export { SignInPage }

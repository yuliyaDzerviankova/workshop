import { Box, Button, Flex, Link, Stack, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { Form, InputControl } from "../../components/form"

type Values = {
  phoneNumber: string
  password: string
  repeatPassword: string
  code: string
}

const RegisterPage = () => {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Values>({ defaultValues: { phoneNumber: "", password: "", code: "", repeatPassword: "" } })

  const register = async (data: Values) => navigate("/signin")

  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <Stack bg="whiteMain" borderRadius="10px" gap={0} width="450px">
        <Box borderBottomColor="grayMain" borderBottomWidth="1px" py={4}>
          <Text fontSize="20px" fontWeight={600} textAlign="center" textTransform="uppercase">
            workshop nina
          </Text>
        </Box>
        <Flex direction="column" pb="60px" pt="20px" px="50px">
          <Text color="blackMain" fontSize="20px" fontWeight={500} textAlign="center">
            Добро пожаловать!
          </Text>
          <Stack as={Form} gap={4} pt={5} onSubmit={handleSubmit(register)}>
            <InputControl
              control={control}
              label="Номер телефона"
              name="phoneNumber"
              placeholder="+375"
              rules={{
                required: "Введите номер телефона",
                pattern: { value: /^[+](375)[0-9]{9}$/, message: "Номер телефона невалидный" },
              }}
              hideRequiredIndicator
            />

            <InputControl
              control={control}
              label="Пароль"
              name="password"
              type="password"
              placeholder="Ireumeun_JK"
              rules={{
                required: "Введите пароль",
                pattern: {
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_*-]).{8,}$/,
                  message:
                    "Минимум 8 символов, латинскими буквами, минимум одна цифра и большая буква, разрешено использование символов *, _ и -",
                },
              }}
              hideRequiredIndicator
            />

            <InputControl
              control={control}
              label="Повторите пароль"
              name="repeatPassword"
              type="password"
              placeholder="Ireumeun_JK"
              rules={{
                required: "Повторите пароль",
                validate: (value, formValues) => {
                  if (value !== formValues.password) {
                    return "Пароли не совпадают"
                  }

                  return
                },
              }}
              hideRequiredIndicator
            />
            {/*<FormControl mb="40px">*/}
            {/*  <FormLabel alignItems="center" display="flex" justifyContent="space-between">*/}
            {/*    <Text color="#241111">Проверочный код</Text>*/}
            {/*    <Link color="#828282" textDecoration="underline">*/}
            {/*      Выслать код*/}
            {/*    </Link>*/}
            {/*  </FormLabel>*/}
            {/*  <Input placeholder="234567" width="100%" />*/}
            {/*  <FormHelperText color="link" fontSize="xs">*/}
            {/*    В течении нескольких минут на ваш номер телефона придет сообщение с кодом.*/}
            {/*  </FormHelperText>*/}
            {/*</FormControl>*/}
            <Button height="46px" isDisabled={isSubmitting} isLoading={isSubmitting} type="submit">
              Зарегистрироваться
            </Button>
            <Text color="grayMain" textAlign="center">
              или
            </Text>
            <Link
              color="link"
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

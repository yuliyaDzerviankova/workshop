import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Link, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { Form } from "../../components"

type Values = {
  phoneNumber: string
  password: string
}

const SignInPage = () => {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Values>({ defaultValues: { phoneNumber: "", password: "" } })
  const validCreds = [
    { phone: "+375447484105", password: "erd_34FS" },
    { phone: "+375447282024", password: "Test_123" },
  ]
  const [isError, setIsError] = useState(false)

  const onSignin = async (data: Values) => {
    const user = validCreds.find((item) => item.phone === data.phoneNumber && item.password === data.password)
    if (user) {
      return navigate("/")
    } else {
      setIsError(true)
      setTimeout(() => setIsError(false), 2000)
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" width="100%">
      <Stack bg="whiteMain" borderRadius="10px" width="450px">
        <Box borderBottomColor="grayMain" borderBottomWidth="1px" py={4}>
          <Text fontSize="xl" fontWeight={600} textAlign="center" textTransform="uppercase">
            workshop nina
          </Text>
        </Box>
        <Flex direction="column" pb={14} pt={4} px="50px">
          <Text color="blackMain" fontSize="xl" fontWeight={500} textAlign="center">
            С возвращением!
          </Text>
          <Stack as={Form} pt="30px" onSubmit={handleSubmit(onSignin)}>
            {isError && (
              <Text color="error" fontSize="sm" textAlign="center">
                Данные не совпадают
              </Text>
            )}
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field: { name, onChange, value, ...field }, fieldState, formState }) => (
                <FormControl isInvalid={fieldState.invalid} isReadOnly={formState.isSubmitting} mb={4} isRequired>
                  <FormLabel requiredIndicator>Номер телефона</FormLabel>
                  <Input placeholder="+375" value={value} onChange={onChange} {...field} />
                  <FormErrorMessage mt={2} position="relative" variant="tooltip" zIndex={1}>
                    {errors.phoneNumber?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
              rules={{
                required: "Введите номер телефона",
                pattern: { value: /^[+](375)[0-9]{9}$/, message: "Номер телефона невалидный" },
              }}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { name, value, ...field }, fieldState, formState }) => (
                <FormControl isInvalid={fieldState.invalid} isReadOnly={formState.isSubmitting} mb={5} isRequired>
                  <FormLabel alignItems="center" display="flex" justifyContent="space-between" requiredIndicator>
                    <Text>Пароль</Text>
                    <Link textDecoration="underline">Забыли?</Link>
                  </FormLabel>
                  <Input placeholder="Введите пароль" type="password" {...field} value={value} />
                  <FormErrorMessage mt={2} position="relative" variant="tooltip" zIndex={1}>
                    {errors.password?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
              rules={{ required: "Введите пароль" }}
            />
            <Button height={12} isDisabled={isSubmitting} isLoading={isSubmitting} type="submit">
              Войти в аккаунт
            </Button>
            <Text color="grayMain" textAlign="center">
              или
            </Text>
            <Link textAlign="center" textDecoration="underline" onClick={() => navigate("/register")}>
              Зарегистрироваться
            </Link>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  )
}

export { SignInPage }

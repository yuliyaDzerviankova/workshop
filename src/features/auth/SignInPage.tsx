import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type Values = {
  phoneNumber: string
  password: string
}

const SignInPage = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Values>({ defaultValues: { phoneNumber: "", password: "" } })

  const onSignin = async (data: Values) => {
    console.log(data)

    return Promise.resolve()
  }

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
            С возвращением!
          </Text>
          <Stack as="form" pt="30px" onSubmit={handleSubmit(onSignin)}>
            {/*<Controller*/}
            {/*  control={control}*/}
            {/*  name="phoneNumber"*/}
            {/*  render={({ field: { name, value, ...field }, fieldState, formState }) => (*/}
            {/*    <FormControl*/}
            {/*      isInvalid={fieldState.invalid}*/}
            {/*      isReadOnly={formState.isSubmitting}*/}
            {/*      label="Номер телефона"*/}
            {/*      mb="20px"*/}
            {/*      isRequired*/}
            {/*    >*/}
            {/*      <FormLabel color="#241111" mb="10px" mr="auto" requiredIndicator>*/}
            {/*        Номер телефона*/}
            {/*        /!*{fieldState.error?.message && (*!/*/}
            {/*        <FormErrorMessage m="-4px 0 0 8px" position="relative" variant="tooltip" zIndex={1}>*/}
            {/*          Введите номер телефона*/}
            {/*          {errors.phoneNumber?.message}*/}
            {/*        </FormErrorMessage>*/}
            {/*        /!*)}*!/*/}
            {/*      </FormLabel>*/}
            {/*      <Input borderColor="error" placeholder="+375" value={value} {...field} width="100%" />*/}
            {/*      <FormErrorMessage m="-4px 0 0 8px" position="relative" variant="tooltip" zIndex={1}>*/}
            {/*        {fieldState.error?.message}*/}
            {/*      </FormErrorMessage>*/}
            {/*    </FormControl>*/}
            {/*  )}*/}
            {/*  rules={{ required: "Введите номер телефона" }}*/}
            {/*/>*/}
            <FormControl
              // isInvalid={fieldState.invalid}
              // isReadOnly={formState.isSubmitting}
              label="Номер телефона"
              mb={4}
              isRequired
            >
              <FormLabel requiredIndicator>
                Номер телефона
                {/*{fieldState.error?.message && (*/}
                <FormErrorMessage m="-4px 0 0 8px" position="relative" variant="tooltip" zIndex={1}>
                  Введите номер телефона
                  {errors.phoneNumber?.message}
                </FormErrorMessage>
                {/*)}*/}
              </FormLabel>
              <Input borderColor="error" placeholder="+375" width="100%" />
              <FormHelperText color="error">Введите номер телефона</FormHelperText>
            </FormControl>
            <FormControl
              // isInvalid={fieldState.invalid}
              // isReadOnly={formState.isSubmitting}
              label="Пароль"
              mb={4}
              isRequired
            >
              <FormLabel alignItems="center" display="flex" justifyContent="space-between" requiredIndicator>
                Пароль
                <Link textDecoration="underline" onClick={() => navigate("/forgotPassword")}>
                  Забыли?
                </Link>
                <FormErrorMessage m="-4px 0 0 8px" position="relative" variant="tooltip" zIndex={1}>
                  Введите пароль
                  {errors.phoneNumber?.message}
                </FormErrorMessage>
                {/*)}*/}
              </FormLabel>
              <Input borderColor="error" placeholder="Введите пароль" width="100%" />
              <FormHelperText color="error">Введите пароль</FormHelperText>
            </FormControl>
            {/*<Controller*/}
            {/*  control={control}*/}
            {/*  name="password"*/}
            {/*  render={({ field: { name, value, ...field }, fieldState, formState }) => (*/}
            {/*    <FormControl isInvalid={fieldState.invalid} isReadOnly={formState.isSubmitting} mb="20px" isRequired>*/}
            {/*      <FormLabel*/}
            {/*        alignItems="center"*/}
            {/*        display="flex"*/}
            {/*        justifyContent="space-between"*/}
            {/*        mb="10px"*/}
            {/*        requiredIndicator*/}
            {/*      >*/}
            {/*        <Text color="#241111">Пароль</Text>*/}
            {/*        <Link color="#828282" textDecoration="underline">*/}
            {/*          Забыли?*/}
            {/*        </Link>*/}
            {/*      </FormLabel>*/}
            {/*      <Input placeholder="Введите пароль" {...field} value={value} width="100%" />*/}
            {/*    </FormControl>*/}
            {/*  )}*/}
            {/*  rules={{ required: true }}*/}
            {/*/>*/}
            <Button
              bg="#DEEC00"
              color="#160202"
              fontWeight="normal"
              height="46px"
              isDisabled={isSubmitting}
              isLoading={isSubmitting}
              onClick={() => navigate("/")}
            >
              Войти в аккаунт
            </Button>
            <Text color="#C6C5C5" textAlign="center">
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

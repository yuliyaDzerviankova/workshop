import { Button, Stack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

import { Form, InputControl } from "../../../../components/form"

type Values = {
  id: string
  oldPassword: string
  newPassword: string
  repeatPassword: string
}

const ChangePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Values>({
    defaultValues: {
      id: "",
      oldPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
  })

  const updatePassword = async (data: Values) => {
    console.log(data)
  }

  return (
    <>
      <Stack as={Form} gap={6} width="50%" onSubmit={handleSubmit(updatePassword)}>
        <InputControl
          control={control}
          label="Введите старый пароль"
          name="oldPassword"
          placeholder="Введите старый пароль"
          rules={{ required: "Пароль введен неверно" }}
        />
        <InputControl
          control={control}
          label="Введите новый пароль"
          name="newPassword"
          placeholder="Введите новый пароль"
          rules={{ required: "Пароль введен неверно" }}
        />
        <InputControl
          control={control}
          label="Повторите новый пароль"
          name="repeatPassword"
          placeholder="Повторите новый пароль"
          rules={{ required: "Пароль введен неверно" }}
        />
      </Stack>
      <Button alignSelf="self-end" isDisabled={isSubmitting} isLoading={isSubmitting} mt={8} type="submit">
        Сохранить изменения
      </Button>
    </>
  )
}

export { ChangePassword }

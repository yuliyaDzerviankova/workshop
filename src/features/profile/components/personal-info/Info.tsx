import { Button, Grid, GridItem } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

import { Form, InputControl } from "../../../../components/form"

type Values = {
  id: string
  name: string
  firstName: string
  middleName?: string
  phoneNumber: string
  email?: string
}

const Info = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Values>({
    defaultValues: {
      id: "",
      name: "",
      firstName: "",
      middleName: "",
      phoneNumber: "",
      email: "",
    },
  })

  const updatePersonalData = async (data: Values) => {
    console.log(data)
  }

  return (
    <>
      <Grid
        as={Form}
        gap={6}
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        width="100%"
        onSubmit={handleSubmit(updatePersonalData)}
      >
        <InputControl
          control={control}
          label="Имя"
          name="name"
          placeholder="Введите имя"
          rules={{ required: "Введите имя" }}
        />
        <InputControl
          control={control}
          label="Фамилия"
          name="firstName"
          placeholder="Введите фамилию"
          rules={{ required: "Введите фамилию" }}
        />
        <InputControl
          control={control}
          label="Отчество"
          name="middleName"
          placeholder="Введите отчество (если таковое имеется)"
        />
        <InputControl
          control={control}
          label="Номер телефона"
          name="phoneNumber"
          placeholder="Введите номер мобильного телефона"
          rules={{ required: "Введите номер мобильного телефона" }}
        />
        <GridItem colSpan={2}>
          <InputControl
            control={control}
            label="E-mail"
            name="email"
            placeholder="Введите свой адрес электронной почты"
          />
        </GridItem>
      </Grid>

      <Button alignSelf="flex-end" isDisabled={isSubmitting} isLoading={isSubmitting} mt={8} type="submit">
        Сохранить изменения
      </Button>
    </>
  )
}

export { Info }

import { Button, FormControl, FormLabel, Grid, GridItem, Heading, Input, Stack } from "@chakra-ui/react"

const PersonalInfo = () => (
  <Stack width="100%">
    <Heading fontSize={18} fontWeight={600} mb={5}>
      Персональные данные
    </Heading>
    <Grid as="form" display="grid" gap={6} templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" width="100%">
      <FormControl flex={1} width="100%">
        <FormLabel>Имя</FormLabel>
        <Input flex={1} placeholder="Введите имя" width="100%" />
      </FormControl>
      <FormControl flex={1}>
        <FormLabel>Фамиилия</FormLabel>
        <Input placeholder="Введите фамилию" />
      </FormControl>
      <FormControl>
        <FormLabel>Отчество</FormLabel>
        <Input placeholder="Введите отчество (если таковое имеется)" />
      </FormControl>
      <FormControl>
        <FormLabel>Номер телефона</FormLabel>
        <Input placeholder="Введите номер мобильного телефона" />
      </FormControl>
      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input placeholder="Введите свой адрес электронной почты" width="100%" />
        </FormControl>
      </GridItem>
    </Grid>

    <Stack background="rgba(198, 197, 197, 0.2)" mt={5} p={4} width="50%">
      <Heading fontSize={18} fontWeight={600} mb={5}>
        Смена пароля
      </Heading>
      <FormControl flex={1} width="100%">
        <FormLabel>Введите старый пароль</FormLabel>
        <Input
          background="whiteMain"
          borderColor="link"
          borderRadius={0}
          borderWidth={1}
          flex={1}
          placeholder="Введите старый пароль"
          width="100%"
        />
      </FormControl>
      <FormControl flex={1} mt={4} width="100%">
        <FormLabel>Введите новый пароль</FormLabel>
        <Input
          background="whiteMain"
          borderColor="link"
          borderRadius={0}
          borderWidth={1}
          flex={1}
          placeholder="Введите новый пароль"
          width="100%"
        />
      </FormControl>
      <FormControl flex={1} mt={4} width="100%">
        <FormLabel>Повторите новый пароль</FormLabel>
        <Input
          background="whiteMain"
          borderColor="link"
          borderRadius={0}
          borderWidth={1}
          flex={1}
          placeholder="Повторите новый пароль"
          width="100%"
        />
      </FormControl>
    </Stack>
    <Button alignSelf="self-end" background="accent" borderRadius={0} fontWeight={400}>
      Сохранить изменения
    </Button>
  </Stack>
)

export { PersonalInfo }

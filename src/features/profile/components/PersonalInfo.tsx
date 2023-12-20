import { FormControl, FormLabel, Grid, Heading, Input, Stack } from "@chakra-ui/react";

const PersonalInfo = () => (
  <Stack>
    <Heading>Персональные данные</Heading>
    <Grid as="form" display="grid" templateColumns="repeat(2, 2fr)">
      <FormControl>
        <FormLabel>Имя</FormLabel>
        <Input placeholder="Введите имя" />
      </FormControl>
      <FormControl>
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
      <FormControl>
        <FormLabel>E-mail</FormLabel>
        <Input placeholder="Введите свой адрес электронной почты" />
      </FormControl>
    </Grid>
  </Stack>
)

export { PersonalInfo }

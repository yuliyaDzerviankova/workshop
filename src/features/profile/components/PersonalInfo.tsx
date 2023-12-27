import { Button, FormControl, FormLabel, Grid, GridItem, Heading, Input, Stack } from "@chakra-ui/react"

const PersonalInfo = () => (
  <Stack width="100%">
    <Heading fontSize={18} fontWeight={600} mb={5}>
      Персональные данные
    </Heading>
    <Grid as="form" display="grid" gap={6} templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" width="100%">
      <FormControl isRequired>
        <FormLabel>Имя</FormLabel>
        <Input placeholder="Введите имя" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Фамилия</FormLabel>
        <Input placeholder="Введите фамилию" />
      </FormControl>
      <FormControl>
        <FormLabel>Отчество</FormLabel>
        <Input placeholder="Введите отчество (если таковое имеется)" />
      </FormControl>
      <FormControl isRequired>
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

    <Stack background="grayOpacity" mt={5} p={4} width="50%">
      <Heading fontSize={18} fontWeight={600} mb={5}>
        Смена пароля
      </Heading>
      <FormControl isRequired>
        <FormLabel>Введите старый пароль</FormLabel>
        <Input placeholder="Введите старый пароль" />
        {/*<FormHelperText color="error" fontSize="sm" fontWeight={500}>*/}
        {/*  Пароль введен неверно*/}
        {/*</FormHelperText>*/}
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Введите новый пароль</FormLabel>
        <Input placeholder="Введите новый пароль" />
        {/*<FormHelperText color="error" fontSize="sm" fontWeight={500}>*/}
        {/*  Пароль введен неверно*/}
        {/*</FormHelperText>*/}
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Повторите новый пароль</FormLabel>
        <Input placeholder="Повторите новый пароль" />
        {/*<FormHelperText color="error" fontSize="sm" fontWeight={500}>*/}
        {/*  Пароль введен неверно*/}
        {/*</FormHelperText>*/}
      </FormControl>
    </Stack>
    <Button alignSelf="self-end" background="accent" borderRadius={0} fontWeight={400}>
      Сохранить изменения
    </Button>
  </Stack>
)

export { PersonalInfo }

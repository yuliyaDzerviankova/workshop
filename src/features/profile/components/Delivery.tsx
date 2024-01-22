import { AddIcon } from "@chakra-ui/icons"
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"

const Delivery = () => (
  <Stack width="100%">
    <Flex align="center">
      <Heading fontSize="lg" fontWeight={600} mr={5}>
        Адреса для доставки
      </Heading>
      <Checkbox size="lg" isChecked>
        <Text color="blackMain" fontSize="sm" fontStyle="italic" fontWeight={400}>
          Сделать адресом по умолчанию
        </Text>
      </Checkbox>
    </Flex>

    <Grid
      as="form"
      display="grid"
      gap={6}
      mt={4}
      templateColumns="repeat(4, 1fr)"
      templateRows="repeat(2, 1fr)"
      width="100%"
    >
      <GridItem colSpan={4}>
        <FormControl>
          <Input defaultValue="г. Гомель, ул. Советская" placeholder="Город, улица" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input defaultValue={10} placeholder="Дом" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input defaultValue={9} placeholder="Квартира" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input defaultValue={1} placeholder="Подъезд" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input defaultValue={3} placeholder="Этаж" />
        </FormControl>
      </GridItem>
    </Grid>
    {/*<Text color="error" fontSize="sm" fontWeight={500}>*/}
    {/*  Данные введены некорректно*/}
    {/*</Text>*/}

    {/*<Link alignItems="center" display="flex" my={4}>*/}
    {/*  <AddIcon mr={3} />*/}
    {/*  <Text>Добавить ещё один адрес</Text>*/}
    {/*</Link>*/}

    {/*<Grid*/}
    {/*  as="form"*/}
    {/*  display="grid"*/}
    {/*  gap={6}*/}
    {/*  mt={4}*/}
    {/*  templateColumns="repeat(3, 1fr)"*/}
    {/*  templateRows="repeat(2, 1fr)"*/}
    {/*  width="100%"*/}
    {/*>*/}
    {/*  <GridItem colSpan={3}>*/}
    {/*    <FormControl>*/}
    {/*      <Input placeholder="Город, улица, дом" />*/}
    {/*    </FormControl>*/}
    {/*  </GridItem>*/}
    {/*  <GridItem>*/}
    {/*    <FormControl>*/}
    {/*      <Input placeholder="Квартира" />*/}
    {/*    </FormControl>*/}
    {/*  </GridItem>*/}
    {/*  <GridItem>*/}
    {/*    <FormControl>*/}
    {/*      <Input placeholder="Подъезд" />*/}
    {/*    </FormControl>*/}
    {/*  </GridItem>*/}
    {/*  <GridItem>*/}
    {/*    <FormControl>*/}
    {/*      <Input placeholder="Этаж" />*/}
    {/*    </FormControl>*/}
    {/*  </GridItem>*/}
    {/*</Grid>*/}

    <Stack background="grayOpacity" mt={5} p={4} width="60%">
      <Flex align="center" mb={4}>
        <Heading fontSize={18} fontWeight={600} mr={5}>
          Карта для оплаты
        </Heading>
        <Checkbox size="lg" isChecked>
          <Text color="blackMain" fontSize="sm" fontStyle="italic" fontWeight={400}>
            Сделать картой по умолчанию
          </Text>
        </Checkbox>
      </Flex>

      <Grid
        as="form"
        display="grid"
        gap={6}
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(3, 1fr)"
        width="100%"
      >
        <GridItem colSpan={3}>
          <FormControl isRequired>
            <FormLabel>Номер карты</FormLabel>
            <Input
              background="whiteMain"
              borderColor="link"
              borderRadius={0}
              borderWidth={1}
              defaultValue="4246410021434852"
              flex={1}
              placeholder="Введите цифры"
              width="100%"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl display="flex" flexDirection="column">
            <FormLabel>Срок действия</FormLabel>
            <Flex justifyContent="space-between" width="100%">
              <Input defaultValue="12" mr={5} placeholder="ММ" />
              <Input defaultValue="25" placeholder="ГГ" />
            </Flex>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>CVV-код</FormLabel>
            <Input defaultValue="525" placeholder="" type="password" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={3}>
          <FormControl>
            <FormLabel>Имя владельца карты</FormLabel>
            <Input defaultValue="NASTASSIA DZIANISAVA" placeholder="" />
          </FormControl>
        </GridItem>

        {/*<GridItem colSpan={3}>*/}
        {/*  <Link alignItems="center" color="link" display="flex" my={4}>*/}
        {/*    <AddIcon mr={3} />*/}
        {/*    <Text>Добавить ещё одну банковскую карту</Text>*/}
        {/*  </Link>*/}
        {/*</GridItem>*/}
      </Grid>
    </Stack>
    <Button alignSelf="self-end" background="accent" borderRadius={0} fontWeight={400}>
      Сохранить изменения
    </Button>
  </Stack>
)

export { Delivery }

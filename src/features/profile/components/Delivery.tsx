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
      <Heading fontSize={18} fontWeight={600} mr={5}>
        Адреса для доставки
      </Heading>
      <Checkbox>Сделать адресом по умолчанию</Checkbox>
    </Flex>

    <Grid
      as="form"
      display="grid"
      gap={6}
      mt={4}
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(2, 1fr)"
      width="100%"
    >
      <GridItem colSpan={3}>
        <FormControl flex={1} width="100%">
          <Input placeholder="Город, улицца, дом" width="100%" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input placeholder="Квартира" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input placeholder="Подъезд" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input placeholder="Этаж" />
        </FormControl>
      </GridItem>
    </Grid>

    <Link alignItems="center" color="link" display="flex" my={4}>
      <AddIcon mr={3} />
      <Text>Добавить ещё один адрес</Text>
    </Link>

    <Grid
      as="form"
      display="grid"
      gap={6}
      mt={4}
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(2, 1fr)"
      width="100%"
    >
      <GridItem colSpan={3}>
        <FormControl flex={1} width="100%">
          <Input placeholder="Город, улицца, дом" width="100%" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input placeholder="Квартира" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input placeholder="Подъезд" />
        </FormControl>
      </GridItem>
      <GridItem>
        <FormControl>
          <Input placeholder="Этаж" />
        </FormControl>
      </GridItem>
    </Grid>

    <Stack background="rgba(198, 197, 197, 0.2)" mt={5} p={4} width="60%">
      <Flex align="center" mb={5}>
        <Heading fontSize={18} fontWeight={600} mr={5}>
          Карта для оплаты
        </Heading>
        <Checkbox>Сделать картой по умолчанию</Checkbox>
      </Flex>

      <Grid
        as="form"
        display="grid"
        gap={6}
        mt={4}
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(3, 1fr)"
        width="100%"
      >
        <GridItem colSpan={3}>
          <FormControl>
            <FormLabel>Номер карты</FormLabel>
            <Input
              background="whiteMain"
              borderColor="link"
              borderRadius={0}
              borderWidth={1}
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
              <Input mr={5} placeholder="ММ" />
              <Input placeholder="ГГ" />
            </Flex>
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>CVV-код</FormLabel>
            <Input placeholder="" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={3}>
          <FormControl>
            <FormLabel>Имя владельца карты</FormLabel>
            <Input placeholder="" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={3}>
          <Link alignItems="center" color="link" display="flex" my={4}>
            <AddIcon mr={3} />
            <Text>Добавить ещё одну банковскую карту</Text>
          </Link>
        </GridItem>
      </Grid>
    </Stack>
    <Button alignSelf="self-end" background="accent" borderRadius={0} fontWeight={400}>
      Сохранить изменения
    </Button>
  </Stack>
)

export { Delivery }

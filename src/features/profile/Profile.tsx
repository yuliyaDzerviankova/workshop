import { EditIcon, SettingsIcon } from "@chakra-ui/icons"
import { Grid, HStack, Heading, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react"

import { CommentIcon, DeliveryAddressesIcon, ExitIcon, ListOrdersIcon, PaymentIcon } from "../../assets"
import { Footer, Header } from "../../components"
import { Card } from "../../components/card/Card"

const Profile = () => {
  const cardItems = [
    {
      icon: <EditIcon />,
      title: "Заполнение контактных данных",
    },
    {
      icon: <ListOrdersIcon />,
      title: "Список ваших заказов",
    },
    {
      icon: <DeliveryAddressesIcon />,
      title: "Адреса для доставки",
    },
    {
      icon: <PaymentIcon />,
      title: "Добавление карты для оплаты",
    },
    {
      icon: <SettingsIcon />,
      title: "Смена пароля",
    },
    {
      icon: <CommentIcon />,
      title: "Ваши отзывы",
    },
    {
      icon: <ExitIcon />,
      title: "Выход",
    },
  ]

  return (
    <VStack flex={1} width="100%">
      <Header />

      <VStack alignItems="flex-start" flex={1} px="100px" py="40px" width="100%">
        <Link>Главная</Link>
        <Heading>Личный кабинет</Heading>
        <Text>Здравствуйте, покупатель!</Text>

        <HStack>
          <HStack>
            <Tabs display="flex">
              <TabList display="flex" flexDirection="column">
                <Tab>Панель управления</Tab>
                <Tab>Персональные данные</Tab>
                <Tab>Доставка и оплата</Tab>
                <Tab>История заказов</Tab>
                <Tab>Отзывы</Tab>
                <Tab>Удаление аккаунта</Tab>
              </TabList>
              <TabPanels flex={1} ml="20px">
                <TabPanel display="flex" flexWrap="wrap">
                  <Grid gap={5} templateColumns="repeat(3, 3fr)">
                    {cardItems.map(({ icon, title }) => (
                      <Card key={title} icon={icon} title={title} />
                    ))}
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </HStack>
          <VStack></VStack>
        </HStack>
      </VStack>

      <Footer />
    </VStack>
  )
}

export { Profile }

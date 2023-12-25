import { EditIcon, SettingsIcon } from "@chakra-ui/icons"
import {
  Button,
  Grid,
  HStack,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"

import { Delivery, Feedbacks, OrdersHistory, PersonalInfo } from "./components"
import { CommentIcon, DeliveryAddressesIcon, ExitIcon, ListOrdersIcon, PaymentIcon } from "../../assets"
import { Footer, Header } from "../../components"
import { Card } from "../../components/card/Card"

const Profile = () => {
  const { onClose, isOpen, onOpen } = useDisclosure()
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

        <HStack width="100%">
          <HStack width="100%">
            <Tabs display="flex" width="100%">
              <TabList borderBottomWidth={0} display="flex" flexDirection="column" width="280px">
                <Tab
                  _hover={{ background: "grayOpacity" }}
                  _selected={{ background: "grayHalfOpacity" }}
                  borderBottomColor="#828282"
                  borderBottomWidth={1}
                  px="40px"
                  py="20px"
                  whiteSpace="nowrap"
                  width="280px"
                >
                  Панель управления
                </Tab>
                <Tab
                  _hover={{ background: "grayOpacity" }}
                  _selected={{ background: "grayHalfOpacity" }}
                  borderBottomColor="#828282"
                  borderBottomWidth={1}
                  px="40px"
                  py="20px"
                  whiteSpace="nowrap"
                >
                  Персональные данные
                </Tab>
                <Tab
                  _hover={{ background: "grayOpacity" }}
                  _selected={{ background: "grayHalfOpacity" }}
                  borderBottomColor="#828282"
                  borderBottomWidth={1}
                  px="40px"
                  py="20px"
                  whiteSpace="nowrap"
                >
                  Доставка и оплата
                </Tab>
                <Tab
                  _hover={{ background: "grayOpacity" }}
                  _selected={{ background: "grayHalfOpacity" }}
                  borderBottomColor="#828282"
                  borderBottomWidth={1}
                  px="40px"
                  py="20px"
                  whiteSpace="nowrap"
                >
                  История заказов
                </Tab>
                <Tab
                  _hover={{ background: "grayOpacity" }}
                  _selected={{ background: "grayHalfOpacity" }}
                  borderBottomColor="#828282"
                  borderBottomWidth={1}
                  px="40px"
                  py="20px"
                  whiteSpace="nowrap"
                >
                  Отзывы
                </Tab>
                <Button
                  borderBottomColor="#828282"
                  borderBottomWidth={1}
                  color="error"
                  fontWeight={600}
                  height="auto"
                  px="40px"
                  py="20px"
                  variant="ghost"
                  whiteSpace="nowrap"
                  onClick={onOpen}
                >
                  Удаление аккаунта
                </Button>
              </TabList>
              <TabPanels flex={1} ml="20px">
                <TabPanel display="flex" flexWrap="wrap">
                  <Grid gap={5} templateColumns="repeat(3, 3fr)">
                    {cardItems.map(({ icon, title }) => (
                      <Card key={title} icon={icon} title={title} />
                    ))}
                  </Grid>
                </TabPanel>
                <TabPanel flex={1}>
                  <PersonalInfo />
                </TabPanel>
                <TabPanel>
                  <Delivery />
                </TabPanel>
                <TabPanel>
                  <OrdersHistory />
                </TabPanel>
                <TabPanel>
                  <Feedbacks />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </HStack>
          <VStack></VStack>
        </HStack>
      </VStack>

      <Footer />

      <Modal isOpen={isOpen} size="md" isCentered onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="40px">
          <ModalCloseButton />
          <ModalBody p={0}>
            <Heading fontSize="20px" fontWeight={700} mb={5} textAlign="center">
              Хотите удалить аккаунт?
            </Heading>
            <Text color="blackMain">
              Вы уверены в том, что хотите удалить аккаунт? Данное действие необратимо и все ваши данные будут утеряны
              навсегда.
            </Text>
          </ModalBody>
          <ModalFooter alignItems="center" display="flex" justifyContent="space-between" mt="30px" p={0} width="100%">
            <Button background="grayMain" color="whiteMain" w="150px" onClick={onClose}>
              Назад
            </Button>
            <Button w="150px">Удалить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  )
}

export { Profile }

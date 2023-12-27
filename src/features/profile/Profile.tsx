import { EditIcon, SettingsIcon } from "@chakra-ui/icons"
import {
  Button,
  Flex,
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
import { useNavigate } from "react-router-dom"

import { Delivery, Feedbacks, OrdersHistory, PersonalInfo } from "./components"
import { CommentIcon, DeliveryAddressesIcon, ExitIcon, ListOrdersIcon, PaymentIcon } from "../../assets"
import { Card, Footer, Header } from "../../components"

const Profile = () => {
  const navigate = useNavigate()
  const { onClose, isOpen, onOpen } = useDisclosure()
  const cardItems = [
    {
      icon: <EditIcon height="35px" width="35px" />,
      title: "Заполнение контактных данных",
    },
    {
      icon: <ListOrdersIcon height="35px" width="35px" />,
      title: "Список ваших заказов",
    },
    {
      icon: <DeliveryAddressesIcon height="35px" width="35px" />,
      title: "Адреса для доставки",
    },
    {
      icon: <PaymentIcon height="35px" width="35px" />,
      title: "Добавление карты для оплаты",
    },
    {
      icon: <SettingsIcon height="35px" width="35px" />,
      title: "Смена пароля",
    },
    {
      icon: <CommentIcon height="35px" width="35px" />,
      title: "Ваши отзывы",
    },
    {
      icon: <ExitIcon height="35px" width="35px" />,
      title: "Выход",
    },
  ]

  return (
    <VStack flex={1} width="100%">
      <Header />

      <VStack alignItems="flex-start" flex={1} px="100px" py="40px" width="100%">
        <Link onClick={() => navigate("/")}>Главная</Link>
        <Heading>Личный кабинет</Heading>
        <Flex align="center">
          <Text>Здравствуйте, </Text>
          <Text fontWeight={600} ml={2}>
            покупатель!
          </Text>
        </Flex>

        <HStack mt={4} width="100%">
          <HStack width="100%">
            <Tabs display="flex" variant="profile" width="100%">
              <TabList borderBottomWidth={0} display="flex" flexDirection="column" width="280px">
                <Tab>Панель управления</Tab>
                <Tab>Персональные данные</Tab>
                <Tab>Доставка и оплата</Tab>
                <Tab>История заказов</Tab>
                <Tab>Отзывы</Tab>
                <Button
                  _hover={{ background: "grayOpacity" }}
                  borderBottomColor="#828282"
                  borderBottomWidth={1}
                  color="error"
                  fontWeight={600}
                  height="auto"
                  px={10}
                  py={5}
                  variant="ghost"
                  whiteSpace="nowrap"
                  onClick={onOpen}
                >
                  Удаление аккаунта
                </Button>
              </TabList>
              <TabPanels flex={1} ml="20px">
                <TabPanel display="flex" flexWrap="wrap" p={0}>
                  <Grid gap={5} templateColumns="repeat(3, 1fr)">
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

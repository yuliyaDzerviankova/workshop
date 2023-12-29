import {
  Button,
  Flex,
  Grid,
  Heading,
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { profileTabs } from "./__data__"
import { Delivery, Feedbacks, OrdersHistory, PersonalInfo } from "./components"
import { AccountDeletingModal } from "./components/AccountDeletingModal"
import { ExitIcon } from "../../assets"
import { Card } from "../../components"

const Profile = () => {
  const navigate = useNavigate()
  const { onClose, isOpen, onOpen } = useDisclosure()

  return (
    <Stack background="whiteMain" flex={1} width="100%">
      <Stack alignItems="flex-start" flex={1} px="100px" py="40px" width="100%">
        <Link onClick={() => navigate("/")}>Главная</Link>
        <Heading>Личный кабинет</Heading>
        <Flex align="center" mb={4}>
          <Text>Здравствуйте, </Text>
          <Text fontWeight={600} ml={2}>
            покупатель!
          </Text>
        </Flex>

        <Tabs display="flex" variant="profile" width="100%">
          <TabList borderBottomWidth={0} display="flex" flexDirection="column" width="280px">
            <Tab>Панель управления</Tab>
            <Tab>Персональные данные</Tab>
            <Tab>Доставка и оплата</Tab>
            <Tab>История заказов</Tab>
            <Tab>Отзывы</Tab>
            <Button
              _hover={{ background: "grayOpacity" }}
              borderBottomColor="link"
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
                {profileTabs.map(({ Icon, title, onClick }) => (
                  <Card key={title} Icon={Icon} title={title} onClick={onClick} />
                ))}
                <Card Icon={ExitIcon} title="Выход" onClick={() => navigate("/signin")} />
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
      </Stack>

      <AccountDeletingModal isOpen={isOpen} onClose={onClose} />
    </Stack>
  )
}

export { Profile }

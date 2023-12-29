import { Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

import { ChangePassword, Info } from "./personal-info"

const PersonalInfo = () => (
  <Stack width="100%">
    <Tabs variant="personal">
      <TabList>
        <Tab>Персональные данные</Tab>
        <Tab>Смена пароля</Tab>
      </TabList>
      <TabPanels>
        <TabPanel display="flex" flexDirection="column">
          <Info />
        </TabPanel>
        <TabPanel display="flex" flexDirection="column">
          <ChangePassword />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Stack>
)

export { PersonalInfo }

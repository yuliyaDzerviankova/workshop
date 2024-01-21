import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

const HomeCategories = () => (
  <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton
          _expanded={{
            textColor: "white",
            background: "#F4E275",
          }}
          _hover={{
            textColor: "white",
            background: "#F4E275",
          }}
          as={Button}
          background="#F4E275"
          px={6}
          rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        >
          Для дома и красоты
        </MenuButton>
        <MenuList borderColor="grayMain" borderRadius={0} py={0}>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Одежда и аксессуары
          </MenuItem>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Посуда
          </MenuItem>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Игрушки
          </MenuItem>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Декор
          </MenuItem>
          <MenuItem justifyContent="center" py={2.5}>
            Другое
          </MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
)

export { HomeCategories }

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

const BodycareCategories = () => (
  <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton
          _expanded={{
            textColor: "white",
            background: "skin",
          }}
          _hover={{
            textColor: "white",
            background: "skin",
          }}
          as={Button}
          background="skin"
          px={8}
          rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        >
          Уход за телом
        </MenuButton>
        <MenuList borderColor="grayMain" borderRadius={0} p={0}>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Для кожи и лица
          </MenuItem>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Для волос
          </MenuItem>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Для тела
          </MenuItem>
          <MenuItem justifyContent="center" py={2.5}>
            Другое
          </MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
)

export { BodycareCategories }

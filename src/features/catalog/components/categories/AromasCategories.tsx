import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"

const AromasCategories = () => (
  <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton
          _expanded={{
            textColor: "white",
            background: "#DF9959",
          }}
          _hover={{
            textColor: "white",
            background: "#DF9959",
          }}
          as={Button}
          background="#DF9959"
          px={6}
          rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        >
          Свечи и диффузоры
        </MenuButton>
        <MenuList borderColor="grayMain" borderRadius={0} py={0}>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Свечи ароматические
          </MenuItem>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Свечи декоративные
          </MenuItem>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Диффузоры
          </MenuItem>
          <MenuItem borderBottomColor="grayMain" borderBottomWidth={1} justifyContent="center" py={2.5}>
            Благовония
          </MenuItem>
          <MenuItem justifyContent="center" py={2.5}>
            Другое
          </MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
)

export { AromasCategories }

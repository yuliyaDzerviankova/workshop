import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"

import { FilterIcon } from "../../../assets"

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState("")
  const filterOptions = [
    { name: "Новинки", value: "new" },
    { name: "Акции", value: "promotions" },
    { name: "В наличии", value: "inStock" },
    { name: "Популярное", value: "popular" },
  ]

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        _expanded={{
          color: "white",
          background: "gray",
          borderBottomWidth: "3px",
          borderBottomColor: "accent",
        }}
        _hover={{
          borderBottomWidth: "3px",
          borderBottomColor: "accent",
        }}
        as={Button}
        background="transparent"
        borderBottomColor="transparent"
        borderBottomWidth="3px"
        px={6}
        rightIcon={<FilterIcon _hover={{ fill: "white" }} />}
      >
        Фильтры
      </MenuButton>
      <MenuList background="grayMain" borderColor="grayMain" borderRadius={0} px={4}>
        <Box>
          <Flex direction="column" mb={3}>
            <Text mb={2}>Цена, р.</Text>
            <Flex>
              <InputGroup>
                <InputLeftAddon background="whiteMain" border="none" borderRadius={0} px={2}>
                  от
                </InputLeftAddon>
                <Input
                  _focus={{ outline: "none" }}
                  _placeholder={{ color: "grayMain" }}
                  border="none"
                  pl={0.5}
                  placeholder="35"
                  width="100px"
                />
              </InputGroup>
              <InputGroup borderLeftColor="grayMain" borderLeftWidth={1}>
                <InputLeftAddon background="whiteMain" border="none" borderRadius={0} px={2}>
                  до
                </InputLeftAddon>
                <Input
                  _focus={{ outline: "none" }}
                  _placeholder={{ color: "grayMain" }}
                  border="none"
                  pl={0.5}
                  placeholder="399"
                  width="100px"
                />
              </InputGroup>
            </Flex>
          </Flex>

          <RadioGroup
            display="flex"
            flexDirection="column"
            value={selectedFilter}
            onChange={(value) => setSelectedFilter(value)}
          >
            {filterOptions.map(({ value, name }) => (
              <Radio key={value} py={2} value={value}>
                {name}
              </Radio>
            ))}
            <Button size="sm" onClick={() => setSelectedFilter("")}>
              Сбросить
            </Button>
          </RadioGroup>
        </Box>
        <MenuItem mt={2} p={0} closeOnSelect>
          <Button background="success" size="sm" w="100%">
            Применить
          </Button>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export { Filter }

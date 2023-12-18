import { Button, Flex, Heading, Link, List, ListItem } from "@chakra-ui/react"

import { CartIcon, SearchIcon, UserIcon } from "../../assets"

const Header = () => (
  <Flex align="center" background="link" flex={1} justify="space-between" px="100px" textColor="whiteMain" width="100%">
    <Heading fontWeight="medium" textTransform="uppercase">
      workshop nina
    </Heading>
    <Flex>
      <List alignItems="center" display="flex" fontSize="md">
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <ListItem
            _hover={{
              borderBottomWidth: "5px",
              borderBottomColor: "accent",
              textDecoration: "none",
              cursor: "pointer",
            }}
            borderBottomColor="transparent"
            borderBottomWidth="5px"
            px="10px"
            py="40px"
          >
            Главная
          </ListItem>
        </Link>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <ListItem
            _hover={{
              borderBottomWidth: "5px",
              borderBottomColor: "accent",
              textDecoration: "none",
              cursor: "pointer",
            }}
            borderBottomColor="transparent"
            borderBottomWidth="5px"
            px="10px"
            py="40px"
          >
            Каталог
          </ListItem>
        </Link>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <ListItem
            _hover={{
              borderBottomWidth: "5px",
              borderBottomColor: "accent",
              textDecoration: "none",
              cursor: "pointer",
            }}
            borderBottomColor="transparent"
            borderBottomWidth="5px"
            px="10px"
            py="40px"
          >
            Новинки
          </ListItem>
        </Link>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <ListItem
            _hover={{
              borderBottomWidth: "5px",
              borderBottomColor: "accent",
              textDecoration: "none",
              cursor: "pointer",
            }}
            borderBottomColor="transparent"
            borderBottomWidth="5px"
            px="10px"
            py="40px"
          >
            Акции
          </ListItem>
        </Link>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <ListItem
            _hover={{
              borderBottomWidth: "5px",
              borderBottomColor: "accent",
              textDecoration: "none",
              cursor: "pointer",
            }}
            borderBottomColor="transparent"
            borderBottomWidth="5px"
            px="10px"
            py="40px"
          >
            В подарок
          </ListItem>
        </Link>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <ListItem
            _hover={{
              borderBottomWidth: "5px",
              borderBottomColor: "accent",
              textDecoration: "none",
              cursor: "pointer",
            }}
            borderBottomColor="transparent"
            borderBottomWidth="5px"
            px="10px"
            py="40px"
          >
            Контакты
          </ListItem>
        </Link>
      </List>
    </Flex>
    <Flex>
      <Button variant="ghost">
        <SearchIcon />
      </Button>
      <Button variant="ghost">
        <UserIcon />
      </Button>
      <Button variant="ghost">
        <CartIcon />
      </Button>
    </Flex>
  </Flex>
)

export { Header }

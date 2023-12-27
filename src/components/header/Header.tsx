import { Button, Flex, Image, Link, List, ListItem } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

import { CartIcon, Logo, SearchIcon, UserIcon } from "../../assets"

const Header = () => {
  const navigate = useNavigate()

  return (
    <Flex
      align="center"
      background="link"
      flex={1}
      justify="space-between"
      px="100px"
      textColor="whiteMain"
      width="100%"
    >
      <Image maxW="200px" src={Logo} />
      <Flex>
        <List alignItems="center" display="flex" fontSize="md">
          <Link color="whiteMain" textDecoration="none" onClick={() => navigate("/")}>
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
          <Link color="whiteMain" textDecoration="none" onClick={() => navigate("/catalog")}>
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
          <Link color="whiteMain" textDecoration="none">
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
          <Link color="whiteMain" textDecoration="none">
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
          <Link color="whiteMain" textDecoration="none">
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
          <Link color="whiteMain" textDecoration="none">
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
        <Button _hover={{ background: "grayOpacity" }} variant="ghost">
          <SearchIcon height="25px" width="25px" />
        </Button>
        <Button _hover={{ background: "grayOpacity" }} variant="ghost" onClick={() => navigate("/profile")}>
          <UserIcon height="25px" width="25px" />
        </Button>
        <Button _hover={{ background: "grayOpacity" }} variant="ghost" onClick={() => navigate("/cart")}>
          <CartIcon height="25px" width="25px" />
        </Button>
      </Flex>
    </Flex>
  )
}

export { Header }

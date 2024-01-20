import { AddIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Radio,
  RadioGroup,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  DeliveryIcon,
  FeedbackIcon,
  FilterIcon,
  Five,
  Four,
  One,
  PaymentIcon,
  Seven,
  Six,
  Three,
  Two,
} from "../../assets"

const Catalog = () => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showFeed, setShowFeed] = useState(false)
  const [counter, setCounter] = useState(1)

  const filterOptions = [
    { name: "Новинки", value: "new" },
    { name: "Акции", value: "promotions" },
    { name: "В наличии", value: "inStock" },
    { name: "Популярное", value: "popular" },
  ]

  const handleShowFeed = () => setShowFeed(!showFeed)

  const onCounterUp = () => setCounter(counter + 1)

  const onCounterDown = () => {
    setCounter((prevState) => {
      if (prevState > 1) {
        return prevState - 1
      }

      return prevState
    })
  }

  return (
    <Box background="whiteMain">
      <VStack alignItems="flex-start" gap="20px" pb="100px" pt="40px" px="100px">
        <Link>Главная</Link>
        <Heading>Каталог</Heading>
        <Flex justify="space-between" width="100%">
          <HStack gap={5}>
            <Button background="#A682BD">Все</Button>
            <Button background="#DEEC00">Цветы</Button>
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

            <Button background="#9DBFE8">Боксы</Button>
          </HStack>

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

                <RadioGroup display="flex" flexDirection="column">
                  {filterOptions.map(({ value, name }) => (
                    <Radio key={value} py={2} value={value}>
                      {name}
                    </Radio>
                  ))}
                </RadioGroup>
              </Box>
            </MenuList>
          </Menu>
        </Flex>
        <Grid gap={5} templateColumns="repeat(4, 2fr)">
          <GridItem
            _hover={{
              width: "100%",
              height: "100%",
              opacity: 0.1,
            }}
            background={`url(${One})`}
            backgroundSize="cover"
            transition="0.2s all ease-out"
            onClick={onOpen}
          />
          <GridItem onClick={onOpen}>
            <Image src={One} />
          </GridItem>
          <GridItem onClick={onOpen}>
            <Image src={Two} />
          </GridItem>
          <GridItem onClick={onOpen}>
            <Image src={Three} />
          </GridItem>
          <GridItem onClick={onOpen}>
            <Image src={Four} />
          </GridItem>
          <GridItem onClick={onOpen}>
            <Image src={Five} />
          </GridItem>
          <GridItem onClick={onOpen}>
            <Image src={Six} />
          </GridItem>
          <GridItem onClick={onOpen}>
            <Image src={Seven} />
          </GridItem>
        </Grid>

        <Modal isOpen={isOpen} size="6xl" onClose={onClose}>
          <ModalOverlay />
          <ModalContent p="50px">
            <ModalCloseButton />
            <ModalBody p={0}>
              <HStack alignItems="flex-start" justifyContent="space-between">
                <Box>
                  <Image maxW="350px" src={One} />
                  <Box alignItems="center" display="flex" maxH="100px" maxW="100px" mt={6}>
                    <Image mr={6} src={One} />
                    <Image src={One} />
                  </Box>
                </Box>
                <VStack alignItems="flex-start" width="60%">
                  <Link textDecoration="underline">Цветы</Link>
                  <Flex alignItems="flex-start" justifyContent="space-between" width="100%">
                    <Heading fontSize="4xl" fontWeight="500" mb={2}>
                      Букет сборный
                    </Heading>
                    <Text color="link">В наличии: 1</Text>
                  </Flex>
                  <Heading fontSize="2xl" fontWeight="400">
                    Цена 145 р.
                  </Heading>

                  <Flex align="center" mb="20px" mt="80px">
                    <Button background="grayMain" borderRadius={0} fontSize="3xl" onClick={onCounterUp}>
                      +
                    </Button>
                    <Text mx={2} textAlign="center" width="30px">
                      {counter}
                    </Text>
                    <Button background="grayMain" borderRadius={0} fontSize="3xl" onClick={onCounterDown}>
                      -
                    </Button>
                    <Text fontSize="2xl" ml="20px">
                      145 р.
                    </Text>
                  </Flex>

                  <Flex align="center" width="100%">
                    <Button
                      background="accent"
                      flex={1}
                      fontWeight={400}
                      maxW="300px"
                      textTransform="uppercase"
                      onClick={() => navigate("/cart")}
                    >
                      В корзину
                    </Button>
                    <Button fontWeight={500} leftIcon={<DeliveryIcon />} ml={2} size="sm" variant="ghost">
                      О доставке
                    </Button>
                    <Button fontWeight={500} leftIcon={<PaymentIcon />} ml={2} size="sm" variant="ghost">
                      Об оплате
                    </Button>
                  </Flex>

                  <Tabs mt="20px" width="100%">
                    <TabList>
                      <Tab>Описание</Tab>
                      <Tab>Состав</Tab>
                      <Tab>Отзывы</Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel px={0}>
                        <Text>Нежный весенний букет, который подарит вашему интерьеру легкость.</Text>
                      </TabPanel>
                      <TabPanel px={0}>
                        <Text>Георгины, колокольчики, диантусы.</Text>
                      </TabPanel>
                      <TabPanel px={0}>
                        <Box background="#F2C0AC" p={4}>
                          <Text fontSize="xl" fontWeight={500} mb={4}>
                            Ефросиния
                          </Text>
                          <Text fontWeight={400}>Букет отличный!</Text>
                        </Box>
                        <Box mt={4}>
                          <Button
                            alignItems="center"
                            borderBottomWidth={1}
                            borderRadius={0}
                            color="link"
                            display="flex"
                            fontWeight={400}
                            leftIcon={<AddIcon fontSize="10px" />}
                            variant="ghost"
                            onClick={handleShowFeed}
                          >
                            Оставить отзыв
                          </Button>
                        </Box>
                        {showFeed && (
                          <Box mt={4}>
                            <Textarea
                              background="grayOpacity"
                              borderRadius={0}
                              borderWidth={0}
                              h="200px"
                              maxH="200px"
                              mb={3}
                              placeholder="Расскажите нам о вашем мнении..."
                              resize="none"
                            />
                            <Flex align="center" justify="space-between">
                              <Box>
                                <FeedbackIcon fontSize="25px" mr={1} />
                                <FeedbackIcon fontSize="25px" mr={1} />
                                <FeedbackIcon fontSize="25px" mr={1} />
                                <FeedbackIcon fontSize="25px" mr={1} />
                                <FeedbackIcon fontSize="25px" />
                              </Box>
                              <Button background="accent" borderRadius={0} fontWeight={400}>
                                Оставить отзыв
                              </Button>
                            </Flex>
                          </Box>
                        )}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>

                  <Box background="#F6E5B9" mt={6} px={8} py={4}>
                    <Text textAlign="center">Цвета на картинке могут немного отличаться оттенками.</Text>
                    <Text mt={3} textAlign="center">
                      Продавец расскажет вам подробнее об этом после оформления заказа.
                    </Text>
                  </Box>
                </VStack>
              </HStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  )
}

export { Catalog }

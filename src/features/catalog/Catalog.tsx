import { AddIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
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
            <Button background="#F2C0AC">Уход за телом</Button>
            <Button background="#DF9959">Свечи и диффузоры</Button>
            <Button background="#F4E275">Для дома и красоты</Button>
            <Button background="#9DBFE8">Боксы</Button>
          </HStack>
          <Button alignItems="center" display="flex" variant="ghost">
            Фильтры
            <FilterIcon ml={2} />
          </Button>
        </Flex>
        <Grid gap={5} templateColumns="repeat(4, 2fr)">
          <GridItem
            _hover={{
              width: "100%",
              height: "100%",
              content: '""',
              background: "rgba(0, 0, 0, 0.5)",
            }}
            onClick={onOpen}
          >
            <Image src={One} />
          </GridItem>
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

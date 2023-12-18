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
import { Footer, Header } from "components"

const Catalog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showFeed, setShowFeed] = useState(false)

  const handleShowFeed = () => setShowFeed(!showFeed)

  return (
    <Box>
      <Header />
      <VStack alignItems="flex-start" gap="20px" pb="100px" pt="40px" px="100px">
        <Link>Главная</Link>
        <Heading>Каталог</Heading>
        <Flex justify="space-between" width="100%">
          <HStack gap={5}>
            <Button background="#A682BD" borderRadius={0}>
              Все
            </Button>
            <Button background="#DEEC00" borderRadius={0}>
              Цветы
            </Button>
            <Button background="#F2C0AC" borderRadius={0}>
              Уход за телом
            </Button>
            <Button background="#DF9959" borderRadius={0}>
              Свечи и диффузоры
            </Button>
            <Button background="#F4E275" borderRadius={0}>
              Для дома и красоты
            </Button>
            <Button background="#9DBFE8" borderRadius={0}>
              Боксы
            </Button>
          </HStack>
          <Button alignItems="center" display="flex" fontWeight="400" variant="ghost">
            Фильтры
            <FilterIcon ml={2} />
          </Button>
        </Flex>
        <Grid gap={5} templateColumns="repeat(4, 2fr)">
          <GridItem onClick={onOpen}>
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
              <HStack alignItems="flex-start" gap="30px" justifyContent="space-between">
                <Box>
                  <Image src={One} />
                  <Box alignItems="center" display="flex" maxH="125px" maxW="125px" mt="30px">
                    <Image mr="30px" src={One} />
                    <Image src={One} />
                  </Box>
                </Box>
                <VStack alignItems="flex-start" width="50%">
                  <Link color="grayMain" textDecoration="underline">
                    Цветы
                  </Link>
                  <Flex alignItems="flex-start" justifyContent="space-between" width="100%">
                    <Heading fontSize="40px" fontWeight="500" mb={2}>
                      Букет сборный
                    </Heading>
                    <Text color="link">В наличии: 1</Text>
                  </Flex>
                  <Heading fontSize="32px" fontWeight="400">
                    Цена 145 р.
                  </Heading>

                  <Flex align="center" mb="20px" mt="80px">
                    <Button background="grayMain" borderRadius={0} fontSize="24px">
                      +
                    </Button>
                    <Text mx={3}>1</Text>
                    <Button background="grayMain" borderRadius={0} fontSize="24px">
                      -
                    </Button>
                    <Text fontSize="30px" ml="20px">
                      145 р.
                    </Text>
                  </Flex>

                  <Flex align="center" width="100%">
                    <Button background="accent" flex={1} textTransform="uppercase">
                      В корзину
                    </Button>
                    <Button leftIcon={<DeliveryIcon />} ml={2} size="sm" variant="ghost">
                      О доставке
                    </Button>
                    <Button leftIcon={<PaymentIcon />} ml={2} size="sm" variant="ghost">
                      Об оплате
                    </Button>
                  </Flex>

                  <Tabs mt="20px">
                    <TabList>
                      <Tab fontSize="28px" fontWeight="400">
                        Описание
                      </Tab>
                      <Tab fontSize="28px" fontWeight="400">
                        Состав
                      </Tab>
                      <Tab fontSize="28px" fontWeight="400">
                        Отзывы
                      </Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel px={0}>
                        <Text>
                          Букет такой-то такого-то цвета в такой упаковке что-то может быть еще захочется сказать а
                          можно на этом и закончить.
                        </Text>
                      </TabPanel>
                      <TabPanel px={0}>
                        <Text>Там есть вот это, а еще вот это и это.</Text>
                      </TabPanel>
                      <TabPanel px={0}>
                        <Box background="#F2C0AC">
                          <Text>Ефросиния</Text>
                          <Text>
                            Заходит как-то улитка в бар и говорит: "Бармен, налей мне стакан воды". Бармен наливает
                            стакан воды и отдает улитке, а та забирает его и уходит.
                          </Text>
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
                              background="rgba(198, 197, 197, 0.20)"
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

                  <Box background="#F6E5B9" mt="30px" px="40px" py="20px">
                    <Text textAlign="center">Цвета на картинке могут немного отличаться оттенками.</Text>
                    <Text mt="20px" textAlign="center">
                      Продавец расскажет вам подробнее об этом после оформления заказа.
                    </Text>
                  </Box>
                </VStack>
              </HStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>

      <Footer />
    </Box>
  )
}

export { Catalog }

import { AddIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
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
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { DeliveryInfoModal } from "./DeliveryInfoModal"
import { PaymentInfoModal } from "./PaymentInfoModal"
import { DeliveryIcon, EmptyStarsIcon, PaymentIcon } from "../../../../assets"
import { Flower } from "../../../../models"

type Props = {
  isOpen: boolean
  onClose: () => void
  flower: Flower
}

const DescriptionModal = ({ isOpen, onClose, flower }: Props) => {
  const navigate = useNavigate()
  const [showFeed, setShowFeed] = useState(false)
  const [counter, setCounter] = useState(1)
  const { isOpen: isDeliveryOpen, onClose: onDeliveryClose, onOpen: onDeliveryOpen } = useDisclosure()
  const { isOpen: isPaymentOpen, onClose: onPaymentClose, onOpen: onPaymentOpen } = useDisclosure()

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

  useEffect(() => {
    if (!isOpen) {
      setCounter(1)
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} size="6xl" onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="50px">
        <ModalCloseButton />
        <ModalBody p={0}>
          <HStack alignItems="flex-start" justifyContent="space-between">
            <Box>
              <Image maxW="350px" src={flower.icon} />
              <Box alignItems="center" display="flex" maxH="100px" maxW="100px" mt={6}>
                <Image mr={6} src={flower.icon} />
                <Image src={flower.icon} />
              </Box>
            </Box>
            <VStack alignItems="flex-start" width="60%">
              <Link textDecoration="underline">Цветы</Link>
              <Flex alignItems="flex-start" justifyContent="space-between" width="100%">
                <Heading fontSize="4xl" fontWeight="500" mb={2}>
                  {flower.name}
                </Heading>
                <Text color="link">В наличии: 1</Text>
              </Flex>
              <Heading fontSize="2xl" fontWeight="400">
                Цена {flower.price} р.
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
                  {flower.price * counter} р.
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
                <Button
                  _hover={{ background: "whiteMain" }}
                  fontWeight={500}
                  leftIcon={<DeliveryIcon />}
                  ml={2}
                  size="sm"
                  variant="ghost"
                  onClick={onDeliveryOpen}
                >
                  О доставке
                </Button>
                <Button
                  _hover={{ background: "whiteMain" }}
                  fontWeight={500}
                  leftIcon={<PaymentIcon />}
                  ml={2}
                  size="sm"
                  variant="ghost"
                  onClick={onPaymentOpen}
                >
                  Об оплате
                </Button>
              </Flex>

              <DeliveryInfoModal isOpen={isDeliveryOpen} onClose={onDeliveryClose} />
              <PaymentInfoModal isOpen={isPaymentOpen} onClose={onPaymentClose} />

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
                    {flower.feedbacks?.map((feed) => (
                      <Box key={feed.id} _notFirst={{ mt: 2 }} background="#F2C0AC" p={4}>
                        <Flex alignItems="center" mb={4}>
                          <Text fontSize="xl" fontWeight={500}>
                            {feed.authorName}
                          </Text>
                          <Box alignItems="center" display="flex" ml={2}>
                            <Text fontSize="lg" fontWeight={600} mr={1}>
                              {feed.stars}
                            </Text>
                            <EmptyStarsIcon />
                          </Box>
                        </Flex>
                        <Text fontWeight={400}>{feed.text}</Text>
                      </Box>
                    ))}
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
                            {Array(5)
                              .fill(0)
                              .map((_, idx) => (
                                // <Image src={idx + 1 <= currRating ? FilledStar : EmptyStar} />
                                <EmptyStarsIcon key={idx} _hover={{ cursor: "pointer" }} fontSize="25px" mr={1} />
                              ))}
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
  )
}

export { DescriptionModal }

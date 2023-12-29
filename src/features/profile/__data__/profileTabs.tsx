import { EditIcon, SettingsIcon } from "@chakra-ui/icons"

import { CommentIcon, DeliveryAddressesIcon, ListOrdersIcon, PaymentIcon } from "../../../assets"
import { CardProps } from "../../../components"

const profileTabs: CardProps[] = [
  {
    Icon: EditIcon,
    title: "Заполнение контактных данных",
    onClick: () => console.log("edit"),
  },
  {
    Icon: ListOrdersIcon,
    title: "Список ваших заказов",
    onClick: () => console.log("list"),
  },
  {
    Icon: DeliveryAddressesIcon,
    title: "Адреса для доставки",
    onClick: () => console.log("addresses"),
  },
  {
    Icon: PaymentIcon,
    title: "Добавление карты для оплаты",
    onClick: () => console.log("payment"),
  },
  {
    Icon: SettingsIcon,
    title: "Смена пароля",
    onClick: () => console.log("change password"),
  },
  {
    Icon: CommentIcon,
    title: "Ваши отзывы",
    onClick: () => console.log("feedback"),
  },
]

export { profileTabs }

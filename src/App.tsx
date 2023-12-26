import { VStack } from "@chakra-ui/react"
import { useRoutes } from "react-router-dom"

import { Catalog } from "./features/catalog/Catalog"
import { Cart, Main, Order, Profile, RegisterPage, SignInPage } from "features"

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/signin", element: <SignInPage /> },
    { path: "/catalog", element: <Catalog /> },
    { path: "/cart", element: <Cart /> },
    { path: "/order", element: <Order /> },
    { path: "/profile", element: <Profile /> },
  ])

  return (
    <VStack align="center" bg="whiteMain" flex={1} justify="center" minHeight="100vh" width="100%">
      {routes}
    </VStack>
  )
}

export { App }

import { Stack, VStack } from "@chakra-ui/react"
import { useLocation, useRoutes } from "react-router-dom"

import { Header } from "./components"
import { Catalog } from "./features/catalog/Catalog"
import { Cart, ForgotPassword, Main, Order, Profile, RegisterPage, SignInPage } from "features"

const App = () => {
  const location = useLocation()

  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/signin", element: <SignInPage /> },
    { path: "/forgotPassword", element: <ForgotPassword /> },
    { path: "/catalog", element: <Catalog /> },
    { path: "/cart", element: <Cart /> },
    { path: "/order", element: <Order /> },
    { path: "/profile", element: <Profile /> },
  ])

  return (
    <VStack align="center" bg="grayMain" flex={1} justify="center" minHeight="100vh" width="100%">
      {
        !(
          location.pathname.includes("/register") ||
          location.pathname.includes("/signin") ||
          (location.pathname.includes("/forgotPassword") && <Header />)
        )
      }
      <Stack width="100%">{routes}</Stack>
    </VStack>
  )
}

export { App }

import { Stack, VStack } from "@chakra-ui/react"
import { useLocation, useRoutes } from "react-router-dom"

import { Footer, Header } from "./components"
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
    <VStack align="center" bg="grayMain" flex={1} gap={0} justify="center" minHeight="100vh" width="100%">
      {location.pathname !== "/signin" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPassword" && <Header />}
      <Stack width="100%">{routes}</Stack>
      {location.pathname !== "/signin" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPassword" && <Footer />}
    </VStack>
  )
}

export { App }

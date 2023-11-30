import { FC } from "react"
import { useRoutes } from "react-router-dom"

import { UnauthenticatedAppWrapper } from "./UnauthenticatedAppWrapper"
import { RegisterPage, SignInPage } from "../auth"

const Router: FC = () =>
  useRoutes([
    {
      path: "/",
      element: <UnauthenticatedAppWrapper />,
      children: [],
    },
    {
      path: "sign-in",
      element: <SignInPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ])

export { Router }

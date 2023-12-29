import { FormControlProps as ChakraFormControlProps } from "@chakra-ui/react"
import { ReactElement } from "react"
import { ControllerFieldState, ControllerProps, FieldValues, UseFormStateReturn } from "react-hook-form"

import { FormFieldProps } from "./components/form"

type WithRequired<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property]
}

type ControlProps<Values extends FieldValues> = WithRequired<
  Pick<ControllerProps<Values>, "control" | "rules" | "name">,
  "name" | "control"
>

type FormControlProps = Pick<ChakraFormControlProps, "isDisabled" | "isReadOnly" | "isRequired" | "size"> & {
  FormControlProps?: Omit<
    ChakraFormControlProps,
    "id" | "isDisabled" | "isInvalid" | "isReadOnly" | "isRequired" | "label" | "size"
  >
}

type FormFieldControlProps<Values extends FieldValues, ChildProps> = Omit<
  FormFieldProps,
  "children" | "htmlFor" | "fieldState" | "isRequired" | "asLegend"
> &
  Omit<ChildProps, "name" | "isRequired" | "id" | "onChange" | "value"> &
  ControlProps<Values>

type SimpleControlProps<Values extends FieldValues, ChildProps> = FormControlProps &
  ControlProps<Values> &
  Omit<ChildProps, "id" | "name">

type AddonOptions<Values extends FieldValues> = {
  fieldState?: ControllerFieldState
  formState?: UseFormStateReturn<Values>
}

type Addon<Values extends FieldValues> = ReactElement | ((options: AddonOptions<Values>) => ReactElement)

export type { Addon, AddonOptions, FormFieldControlProps, SimpleControlProps, FormControlProps }

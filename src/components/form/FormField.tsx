import { FormControl, InputGroup } from "@chakra-ui/react"
import React, { FC, ReactElement } from "react"
import { ControllerFieldState } from "react-hook-form"

import { FieldLayoutText } from "./FieldLayoutText"
import { FormControlProps } from "../../types"

type Props = {
  action?: ReactElement
  asLegend?: boolean
  children: ReactElement
  description?: string
  fieldState: ControllerFieldState
  hideLabel?: boolean
  hideRequiredIndicator?: boolean
  htmlFor: string
  label: ReactElement | string
} & FormControlProps

const FormField: FC<Props> = ({
  FormControlProps,
  action,
  children,
  description,
  fieldState,
  hideLabel,
  hideRequiredIndicator,
  htmlFor,
  isDisabled,
  isReadOnly,
  isRequired,
  label,
  size,
}) => (
  <FormControl
    {...FormControlProps}
    id={htmlFor}
    isDisabled={isDisabled}
    isInvalid={fieldState.invalid}
    isReadOnly={isReadOnly}
    isRequired={isRequired}
    size={size}
  >
    <FieldLayoutText
      action={action}
      description={description}
      error={(!isDisabled && fieldState.error?.message) || null}
      hideLabel={hideLabel}
      hideRequiredIndicator={hideRequiredIndicator}
      label={label}
      size={size}
    >
      <InputGroup alignItems="stretch" size={size}>
        {children}
      </InputGroup>
    </FieldLayoutText>
  </FormControl>
)

export type { Props as FormFieldProps }

export { FormField }

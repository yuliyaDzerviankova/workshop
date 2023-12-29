import { Flex, FormErrorMessage, FormHelperText, FormLabel, InputGroupProps, VisuallyHidden } from "@chakra-ui/react"
import React, { FC, ReactElement } from "react"

import { RequiredIndicator } from "../required-indicator/RequiredIndicator"

type Props = {
  action?: ReactElement | string
  description?: string
  label: ReactElement | string
  hideLabel?: boolean
  hideRequiredIndicator?: boolean
  error: string | null
  children: ReactElement
} & Pick<InputGroupProps, "size">

const FieldLayoutText: FC<Props> = ({
  action,
  children,
  description,
  label,
  hideLabel,
  hideRequiredIndicator,
  error,
  size,
}) => {
  const formLabel = (
    <FormLabel
      mb={description && 0}
      mr="auto"
      requiredIndicator={hideRequiredIndicator ? <></> : <RequiredIndicator />}
      size={size}
      visibility={hideLabel ? "hidden" : "visible"}
    >
      {label}
    </FormLabel>
  )

  return (
    <Flex direction="column">
      <Flex>
        {hideLabel ? <VisuallyHidden>{formLabel}</VisuallyHidden> : formLabel}
        {action}
      </Flex>
      {description && (
        <FormHelperText color="blackMain" fontWeight="normal" mb={3} mt={1}>
          {description}
        </FormHelperText>
      )}
      {children}
      {error && (
        <FormErrorMessage mt={2} position="relative" variant="tooltip" zIndex={1}>
          {error}
        </FormErrorMessage>
      )}
    </Flex>
  )
}

export { FieldLayoutText }

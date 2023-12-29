import { Input, InputProps } from "@chakra-ui/react"
import React from "react"
import { Controller, FieldValues } from "react-hook-form"

import { Addon, FormFieldControlProps } from "../../../types"
import { FormField } from "../FormField"
import { getAddon } from "../getAddon"

type ChildProps<Values extends FieldValues> = InputProps & {
  leftAddon?: Addon<Values>
  rightAddon?: Addon<Values>
}
type Props<Values extends FieldValues> = FormFieldControlProps<Values, ChildProps<Values>>

const InputControl = <Values extends FieldValues>({
  FormControlProps,
  action,
  control,
  description,
  hideLabel,
  hideRequiredIndicator,
  isDisabled,
  isReadOnly,
  label,
  leftAddon,
  name,
  rightAddon,
  rules,
  ...props
}: Props<Values>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { name, value, ...field }, fieldState, formState }) => {
      const leftContent = getAddon<Values>(leftAddon, { fieldState, formState })
      const rightContent = getAddon<Values>(rightAddon, { fieldState, formState })

      return (
        <FormField
          action={action}
          description={description}
          fieldState={fieldState}
          FormControlProps={FormControlProps}
          hideLabel={hideLabel}
          hideRequiredIndicator={hideRequiredIndicator}
          htmlFor={name}
          isDisabled={isDisabled}
          isReadOnly={formState.isSubmitting || isReadOnly}
          isRequired={!!rules?.required}
          label={label}
          size={props.size}
        >
          <>
            {leftContent}
            <Input {...props} {...field} id={name} value={value} />
            {rightContent}
          </>
        </FormField>
      )
    }}
    rules={rules}
  />
)

export type { Props as InputControlProps }

export { InputControl }

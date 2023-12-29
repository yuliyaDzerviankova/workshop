import { FieldValues } from "react-hook-form"

import { Addon, AddonOptions } from "../../types"

const getAddon = <Values extends FieldValues>(addon?: Addon<Values>, options: AddonOptions<Values> = {}) =>
  typeof addon === "function" ? addon(options) : addon

export { getAddon }

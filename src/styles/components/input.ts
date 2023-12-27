const defaultProps = {
  size: "md",
  variant: "outline",
}

export const baseStyle = {
  field: {
    bg: "whiteMain",
    borderColor: "link",
  },
}

export const Input = {
  variants: {
    outline: {
      field: {
        ...baseStyle.field,
        borderRadius: 0,
        _placeholder: {
          color: "text.03",
          fontSize: "sm",
        },
      },
    },
  },
  defaultProps,
}

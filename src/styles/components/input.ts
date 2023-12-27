const defaultProps = {
  size: "md",
  variant: "outline",
}

export const baseStyle = {
  field: {
    bg: "whiteMain",
    borderColor: "link",
    _placeholder: {
      color: "gray",
      fontSize: "sm",
    },
  },
}

export const Input = {
  variants: {
    outline: {
      field: {
        ...baseStyle.field,
        borderRadius: 0,
        _placeholder: {
          fontWeight: 400,
          color: "gray",
          fontSize: "sm",
        },
      },
    },
  },
  defaultProps,
}

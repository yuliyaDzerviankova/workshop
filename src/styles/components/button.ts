export const Button = {
  baseStyle: {
    fontWeight: 400,
    borderRadius: 0,
  },
  variants: {
    primary: {
      bg: "accent",
      color: "blackMain",
      _hover: {
        background: "grayOpacity",
      },
      _active: {
        background: "grayHalfOpacity",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
}

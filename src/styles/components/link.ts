const baseStyle = {
  color: "link",
  cursor: "pointer",
  outline: "none",
  textUnderlineOffset: "4px",
  transitionDuration: "fast",
  transitionProperty: "common",
  transitionTimingFunction: "ease-out",
  fontSize: "md",
  _hover: {
    color: "hover.link.01",
    textDecoration: "none",
  },
  _focus: {
    boxShadow: "outline",
  },
}

const sizes = {
  xs: {
    fontSize: "xs",
    lineHeight: "100%",
  },
  sm: {
    fontSize: "sm",
  },
}

const variants = {
  footermenu: {
    color: "blackMain",
  },
  primary: {
    textDecoration: "none",
  },
  secondary: {
    textDecoration: "underline",
  },
}

const defaultProps = {
  variant: "primary",
}

export const Link = {
  baseStyle,
  defaultProps,
  sizes,
  variants,
}

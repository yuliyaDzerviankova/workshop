export const Radio = {
  baseStyle: {
    control: {
      bg: "whiteMain",
      borderRadius: "full",
      borderColor: "blackMain",
      borderWidth: "2px",
      cursor: "inherit",
      _checked: {
        color: "blackMain",
        bg: "whiteMain",
        borderColor: "interactive.01",
        _before: {
          content: `""`,
          display: "inline-block",
          pos: "relative",
          w: "60%",
          h: "60%",
          borderRadius: "50%",
          bg: "blackMain",
        },
        _hover: {
          bg: "grayMain",
          borderColor: "hover.field.01",
        },
        _disabled: {
          bg: "field.01",
          borderColor: "interactive.01",
          color: "interactive.01",
          opacity: "0.5",
        },
      },
      _disabled: {
        bg: "field.03",
        borderColor: "ui.02",
        opacity: "0.5",
      },
      _focus: {
        boxShadow: "focus",
      },
      _hover: {
        bg: "field.01",
        borderColor: "hover.field.01",
      },
      _invalid: {
        borderColor: "error.01",
      },
    },
  },
  sizes: {
    md: {
      control: { w: 4, h: 4 },
      label: { fontSize: "md" },
    },
    lg: {
      control: {
        w: 5,
        h: 5,
        _checked: {
          _before: {
            w: "66.7%",
            h: "66.7%",
          },
        },
      },
      label: { fontSize: "lg" },
    },
    sm: {
      control: {
        width: 3,
        height: 3,
        _checked: {
          _before: {
            w: "60%",
            h: "60%",
          },
        },
      },
      label: { fontSize: "sm" },
    },
    xl: {
      control: { w: 7, h: 7 },
      label: { fontSize: "xl" },
    },
  },
  defaultProps: {
    size: "md",
  },
  variants: {
    tile: {
      container: {
        alignItems: "start",
        display: "flex",
        pb: 4,
        pt: 5,
        px: 4,
        border: 2,
        borderStyle: "solid",
        borderRadius: "lg",
        borderColor: "disabled.05",
        "&[data-checked]:not([data-invalid])": {
          borderColor: "interactive.01",
        },
        "&[data-invalid]": {
          borderColor: "error.01",
        },
        "&:not([data-disabled])": {
          _hover: {
            bg: "hover.ui.01",
            "& > .chakra-radio__control": {
              borderColor: "hover.field.01",
            },
          },
          _checked: {
            bg: "selected.ui.01",
          },
        },
      },
      label: {
        marginInlineStart: 4,
      },
    },
  },
}

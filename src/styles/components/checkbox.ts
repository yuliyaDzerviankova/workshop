export const Checkbox = {
  baseStyle: {
    control: {
      borderColor: "blackMain",
      borderRadius: 6,
      borderWidth: 2,
    },
  },
  sizes: {
    md: {
      control: { w: 4, h: 4 },
      label: { fontSize: "md" },
    },
    lg: {
      control: { w: 5, h: 5 },
      label: { fontSize: "lg" },
    },
    sm: {
      control: { width: 3, height: 3 },
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
}

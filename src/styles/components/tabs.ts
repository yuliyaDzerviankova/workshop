export const Tabs = {
  sizes: {
    xs: {
      tab: {
        py: 1,
        px: 2,
        fontSize: "xs",
      },
    },
    sm: {
      tab: {
        py: 1,
        px: 2,
        fontSize: "sm",
      },
    },
    md: {
      tab: {
        fontSize: "md",
        py: 2,
        px: 3,
      },
    },
    lg: {
      tab: {
        fontSize: "lg",
        py: 3,
        px: 4,
      },
    },
  },
  variants: {
    line: {
      tablist: {
        borderBottomColor: "transparent",
      },
      tab: {
        fontSize: "2xl",
        fontWeight: 400,
        borderBottomWidth: 3,
        color: "blackMain",
        marginBottom: "-1px",
        _focus: {
          boxShadow: "focus",
        },
        _hover: {
          color: "active.primary.01",
          borderBottomColor: "ui.02",
        },
        _active: {
          bg: "transparent",
        },
        _selected: {
          borderBottomWidth: 3,
          borderBottomColor: "accent",
          _hover: {
            borderBottomColor: "active.primary.01",
          },
        },
      },
    },
    profile: {
      tab: {
        width: "100%",
        color: "blackMain",
        background: "transparent",
        py: 5,
        px: 10,
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        whiteSpace: "nowrap",
        fontWeight: 600,
        _focus: {
          boxShadow: "focus",
        },
        _hover: {
          background: "grayOpacity",
        },
        _selected: {
          background: "grayHalfOpacity",
          borderBottomColor: "gray",
          borderBottomWidth: 1,
        },
      },
    },
    appmenu: {
      tab: {
        fontSize: "md",
        fontWeight: 500,
      },
    },
    personal: {
      tab: {
        fontSize: "lg",
        fontWeight: 500,
        borderBottomWidth: 2,
        borderBottomColor: "transparent",
        _hover: {
          background: "grayOpacity",
        },
        _active: {
          borderBottomColor: "accent",
        },
        _selected: {
          borderBottomWidth: 2,
          borderBottomColor: "accent",
        },
      },
    },
  },
  defaultProps: {
    variant: "line",
  },
}

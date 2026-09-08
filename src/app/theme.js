import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
  },
  colors: {
    brand: {
      50: "#eefbf7",
      100: "#d3f3e8",
      200: "#a3e6d1",
      300: "#6dd3b6",
      400: "#3fbb9c",
      500: "#1f9c80",
      600: "#177d67",
      700: "#146353",
      800: "#134f44",
      900: "#0f3f38",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("gray.50", "gray.900")(props),
        color: mode("gray.800", "gray.100")(props),
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: "lg",
      },
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Tabs: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;

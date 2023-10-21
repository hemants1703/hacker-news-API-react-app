// This file contains the theme configuration for the application.
import { extendTheme } from "@chakra-ui/react";

// config for the colors
const colors = {
    light: "#F5F5ED",
    dark: "#1C1C1C",
    hackerOrange: { primary: "#FF6926", lighter: "#FF7F4D" },
    hackerDark: "#1C1C1C",
    hackerBlack: "#000000",
    hackerLink: "#477DCA"
}

// config for the fonts
const fonts = {
    heading: "Verdana, Geneva, sans-serif",
    body: "Verdana, Geneva, sans-serif",
}

// config for the color mode
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({ config, colors, fonts });

export default theme;
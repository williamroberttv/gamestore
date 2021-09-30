import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
export const config : ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  fonts: {
    body: 'Roboto',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
});
export default theme;

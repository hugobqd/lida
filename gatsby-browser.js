import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/style/theme";
import { Reboot } from "styled-reboot";
import GlobalStyle from "./src/style/GlobalStyle";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Reboot />
    <GlobalStyle />
    {element}
  </ThemeProvider>
);

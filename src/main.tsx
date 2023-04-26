import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";
import RouteSwitch from "./RouteSwitch";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <RouteSwitch />
    </ThemeProvider>
  </React.StrictMode>
);

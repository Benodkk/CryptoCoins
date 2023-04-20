import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

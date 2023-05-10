import { createGlobalStyle } from "styled-components";

import { devices } from "./deviceWidth";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

html{
    font-size: 7px;
      @media ${devices.tablet} {
    font-size: 10px;
  }
}
body{
    font-family: "Titillium Web", sans-serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 1;
    background-color: rgb(0,6,68);
    color: rgb(255,255,255)
}

ol, ul {
    list-style: none outside none;
}
`;

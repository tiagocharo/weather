import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    width: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    min-height: 100%;
    width: 100%;
  }
`;

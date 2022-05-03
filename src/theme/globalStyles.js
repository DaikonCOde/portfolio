import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html {
    font-size: 62.5%;
  }

  * {
    font-family: 'Fira Code', monospace;
    box-sizing: border-box;
    font-size: 1.4rem
  }

  body {
    margin: 0;
    padding: 15px;
    background: ${ ({theme}) => theme.colors.primary[1] };
    
  }

`
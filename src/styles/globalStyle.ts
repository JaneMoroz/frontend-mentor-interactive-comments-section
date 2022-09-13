import normalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

// Types
type ThemeType = {
  red: string;
  paleRed: string;
  blue: string;
  bluePale: string;
  blueDark: string;
  grey: string;
  greyLight: string;
  greyVeryLight: string;
  white: string;
};

// Theme
export const theme = {
  red: "hsl(358, 79%, 66%)",
  paleRed: "hsl(357, 100%, 86%)",
  blue: "hsl(238, 40%, 52%)",
  bluePale: "hsl(239, 57%, 85%)",
  blueDark: "hsl(212, 24%, 26%)",
  grey: "hsl(211, 10%, 45%)",
  greyLight: "hsl(223, 19%, 93%)",
  greyVeryLight: "hsl(228, 33%, 97%)",
  white: "hsl(0, 0%, 100%)",
};

// Global style
export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; // 1rem = 10px
    @media only screen and (max-width: 56.25em) {
      font-size: 56.25%; //1 rem = 9px
    }
    @media only screen and (max-width: 37.5em) {
      font-size: 50%; //1 rem = 8px,
    }
  }
  body {
    font-family: 'Rubik', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
  }
  main {
    min-height: 100vh;
    color: ${(props) => props.theme.grey};
    background: ${(props) => props.theme.greyVeryLight};
  }
  ul {
    text-decoration: none;
  }
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input,textarea {
    border: none;
    outline: none;
  }
`;

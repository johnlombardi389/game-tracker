import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
    }
  }
  body {
    width: 100%;
  }
  h2 {
    font-family: 'Play', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    color: #333;
  }
  h3 {
    font-family: 'Mulish', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 1.5rem;
    color: #333;
  }
  p {
    font-family: 'Mulish', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 200%;
    color: #696969;
  }
  a {
    text-decoration: none;
    color: #333;
  }
`;

export default GlobalStyles;

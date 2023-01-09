import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
    }
    &::-webkit-scrollbar-track {
    background: white;
    }
  }
  body {
    width: 100%;
    background-image: url('https://raw.githubusercontent.com/johnlombardi389/game-tracker/eeb311885d2a623dec4233dff1259a463cd0257b/src/assets/images/subtle-prism.svg');
    background-repeat: repeat; 
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
    padding: 1.5rem 0rem;
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
  img {
    display: block;
  }
  input {
    font-family: "Mulish", sans-serif;
    font-weight: 700;
  }
`;

export default GlobalStyles;

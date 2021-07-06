import { createGlobalStyle } from 'styled-components';
import { pinkBlack, white } from './src/components/utilities';

const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em 'Josephin Sans', Helvetica, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
}

body {
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Josephin Sans', Helvetica, sans-serif;
  font-weight: normal;
  background-color: ${white};
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}

a {
    text-decoration: none;
    color: inherit;
}

b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}

button, a {
  cursor: pointer;
}

* {
  box-sizing: inherit;
}
*:before {
  box-sizing: inherit;
}
*:after {
  box-sizing: inherit;
}

main {
  width: 100vw;
  margin: 0 auto;
}

`;

export default GlobalStyle;
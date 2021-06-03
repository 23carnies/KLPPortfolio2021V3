import { createGlobalStyle } from 'styled-components';
import { pinkBlack, white } from './src/components/utilities';

const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em 'Quicksand', Helvetica, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
}

body {
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Lato', Helvetica, sans-serif;
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

h1,h2,h3,h4,h5,h6 {
  z-index: 10;
  font: 700 'Quicksand', Helvetica, sans-serif;
  line-height: 1.3;
  color: ${pinkBlack};
  text-align: center;
}
p, a {
  font: 400 'Lato', Helvetica, sans-serif;
  line-height: 1.3;
  /* margin-bottom: 1rem; */
}

h1 {
  margin: 3rem 0 1.38rem;
  margin-top: 0;
  font-size: 7.6rem;
}

h2 {font-size: 5rem;}

h3 {font-size: 3.4rem;}

h4 {font-size: 2.25rem;}

h5 {font-size: 1.5rem;}

small, .text_small {font-size: 0.667rem;}

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
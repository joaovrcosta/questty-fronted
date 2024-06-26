import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    /* background-color:  #f5f8fa; */
    background-color: #ebf2f7 ;
  }

  /* body {
  background-color: #fdfff4;
} */

html,
body,
root {
  height: 100%;
}

* {
  margin: 0;
  box-sizing: border-box !important;
  /* font-family: 'Poppins'; */
}

h1,
h2,
h3,
p,
span {
  color: #10162f;
}

`

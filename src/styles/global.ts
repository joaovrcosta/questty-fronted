import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f8f7fc;
  }

html,
body,
root {
  height: 100%;
}

* {
  margin: 0;
  box-sizing: border-box !important;
  font-family: Poppins;
}
`

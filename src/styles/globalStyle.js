import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
    
}

body{
   background: #000000;
   max-width: 100vw;
    max-height: 100vh;
}

`

export default GlobalStyle

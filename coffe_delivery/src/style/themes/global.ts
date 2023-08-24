import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`

    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }

h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Baloo 2', sans-serif;
}

button, input, select, textarea, body {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
}


`
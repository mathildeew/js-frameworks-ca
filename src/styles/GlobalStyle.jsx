import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    box-sizing: border-box;
}

html {
    --color-primary: #37404E;
    --color-secondary: #FCC0D4;
    --color-black: #000;
    --color-white: #F7F5F8;
    --color-discount: #F85050;
    height: 100%;
}

body {
    font-family: Open Sans Variable, sans-serif;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: var(--color-white);
    margin: 0;
}


main {
    max-width: 850px;
    min-height: 100vh;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    margin-top: 10px;
    margin-bottom: 10px;
}

h2 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}

a {
    color: var(--color-white);
    text-decoration: none;
}

li {
    list-style: none;
}

hr {
   
   border-color: var(--color-primary);
}

`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    box-sizing: border-box;
}

html {
    --color-primary: #37404E;
    --color-secondary: #fcc0d4;
    --color-secondary04: rgba(252, 192, 212, 0.6);
    --color-black: #000;
    --color-white: #F7F5F8;
    --color-discount: #F85050;
    height: 100%;
    font-size: 62.5%;

}

body {
    font-family: Open Sans Variable, sans-serif;
    background: var(--color-white);
    width: 100%;
    height: 100vh;
    min-height: 100vh;
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
    font-size: 2.5rem;
    margin-top: 10px;
    margin-bottom: 10px;
}

h2 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 10px;
}

p {
    font-size: 1.6rem;
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

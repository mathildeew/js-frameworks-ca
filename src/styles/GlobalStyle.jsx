import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
}

html {
    --color-primary: #F7F5F8;
    --color-secondary: black;
    --color-discount: #F85050;
    height: 100%;

}
body {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    background: var(--color-primary);
    font-family: Open Sans Variable, sans-serif;
}

main {
    margin-left: 10px;
    margin-right: 10px;
}

h2 {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
}



a {
    text-decoration: none;
}

li {
    list-style: none;
}

`;

export default GlobalStyle;

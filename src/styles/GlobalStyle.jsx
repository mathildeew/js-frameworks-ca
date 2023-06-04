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
    height: 100%;
    width: 100%;
    margin: 0 auto;
    background: var(--color-white);
    font-family: Open Sans Variable, sans-serif;
}

main {
    margin-left: 10px;
    margin-right: 10px;
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

`;

export default GlobalStyle;

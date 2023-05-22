import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

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



a {
    text-decoration: none;
}



`;

export default GlobalStyle;

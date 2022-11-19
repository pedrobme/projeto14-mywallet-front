import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
	background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    justify-content: center;
}
`;

export default GlobalStyle;

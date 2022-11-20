import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
}

body {
	background-color: #8C11BE;

    font-family: 'Raleway', sans-serif;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
}
`;

export default GlobalStyle;

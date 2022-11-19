import styled from "styled-components";
import LoginScreen from "./components/LoginScreen";
import GlobalStyle from "./GlobalStyle";
import ResetCss from "./ResetCss";

function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <Screen>
        <LoginScreen />
      </Screen>
    </>
  );
}

export default App;

// Styled Components

const Screen = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: center;
`;

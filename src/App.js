import SigninScreen from "./components/SigninScreen";
import GlobalStyle from "./GlobalStyle";
import ResetCss from "./ResetCss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupScreen from "./components/SignupScreen";
import WalletScreen from "./components/WalletScreen";

function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/wallet" element={<WalletScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

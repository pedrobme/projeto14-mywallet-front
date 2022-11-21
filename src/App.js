import SigninScreen from "./pages/SigninScreen";
import GlobalStyle from "./GlobalStyle";
import ResetCss from "./ResetCss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupScreen from "./pages/SignupScreen";
import WalletScreen from "./pages/WalletScreen";
import React from "react";
import AddEntry from "./pages/AddEntry";

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
          <Route path="/entry/:entrytype" element={<AddEntry />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

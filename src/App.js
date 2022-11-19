import SigninScreen from "./components/SigninScreen";
import GlobalStyle from "./GlobalStyle";
import ResetCss from "./ResetCss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupScreen from "./components/SignupScreen";
import WalletScreen from "./components/WalletScreen";
import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import AddEntry from "./components/AddEntry";

function App() {
  return (
    <>
      <ResetCss />
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/wallet" element={<WalletScreen />} />
            <Route path="/entry/:entrytype" element={<AddEntry />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

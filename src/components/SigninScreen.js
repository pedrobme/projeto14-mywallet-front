import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

const SigninScreen = () => {
  const { setAuthToken } = React.useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setAuthToken("Token recebido");

    navigate("/wallet");
  };

  return (
    <ScreenContainer>
      <StyledHeader>MyWallet</StyledHeader>
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <StyledInput placeholder="E-mail" />
        <StyledInput placeholder="Senha" />
        <StyledButton type="submit">Entrar</StyledButton>
      </StyledForm>
      <Link to="/signup">Primeira vez? Cadastre-se!</Link>
    </ScreenContainer>
  );
};

export default SigninScreen;

// Styled Components

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 300px;

  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
`;

const StyledHeader = styled.header`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  color: #ffffff;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 500px;

  align-items: center;
`;

const StyledInput = styled.input`
  width: 90%;
  max-width: 500px;
  height: 58px;

  border-radius: 5px;

  border: none;

  font-size: 20px;
  color: #000000;

  ::placeholder {
    font-size: 20px;
    color: #000000;
  }

  margin-bottom: 13px;
`;

const StyledButton = styled.button`
  width: 90%;
  max-width: 326px;
  height: 46px;

  background: #a328d6;
  border-radius: 5px;

  border: none;

  margin-top: 30px;

  font-weight: 700;
  font-size: 20px;

  cursor: pointer;

  color: #ffffff;
`;

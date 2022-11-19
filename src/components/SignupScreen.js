import { Link } from "react-router-dom";
import styled from "styled-components";

const SignupScreen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ScreenContainer>
      <StyledHeader>MyWallet</StyledHeader>
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <StyledInput placeholder="Nome" />
        <StyledInput placeholder="E-mail" />
        <StyledInput placeholder="Senha" />
        <StyledInput placeholder="Confirme a senha" />
        <StyledButton type="submit">Cadastrar</StyledButton>
      </StyledForm>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </ScreenContainer>
  );
};

export default SignupScreen;

// Styled Components

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 450px;

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

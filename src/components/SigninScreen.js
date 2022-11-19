import { Link } from "react-router-dom";
import styled from "styled-components";

const SigninScreen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
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

  a {
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;

    margin-inline: auto;
  }
`;

const StyledHeader = styled.header`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  color: #ffffff;

  margin-inline: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 326px;
  height: 58px;

  border-radius: 5px;

  border: none;

  font-size: 20px;
  color: #000000;

  ::placeholder {
    font-size: 20px;
    color: #000000;
  }

  margin-inline: auto;

  margin-bottom: 13px;
`;

const StyledButton = styled.button`
  width: 326px;
  height: 46px;

  background: #a328d6;
  border-radius: 5px;

  border: none;

  margin-inline: auto;

  font-weight: 700;
  font-size: 20px;

  cursor: pointer;

  color: #ffffff;
`;

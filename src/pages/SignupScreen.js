import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignupScreen = () => {
  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState(""),
    [passwordVisibility, setPasswordVisibility] = useState("hidden"),
    [errorLog, setErrorLog] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUserObject = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await axios.post(
        process.env.REACT_APP_SIGNUP,
        newUserObject
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorLog(error.response.data);
    }
  };

  const alternatePasswordVisibility = () => {
    switch (passwordVisibility) {
      case "hidden":
        setPasswordVisibility("visible");
        break;
      case "visible":
        setPasswordVisibility("hidden");
        break;

      default:
        break;
    }
  };

  return (
    <ScreenContainer errorLog={errorLog}>
      <StyledHeader>MyWallet</StyledHeader>
      <StyledForm onSubmit={(event) => handleSubmit(event)}>
        <StyledInput
          placeholder="Nome"
          onChange={(event) => setUsername(event.target.value)}
        />
        <StyledInput
          placeholder="E-mail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <PasswordDiv>
          <StyledInput
            type={passwordVisibility === "hidden" ? "password" : ""}
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
          />
          {passwordVisibility === "hidden" ? (
            <ion-icon
              onClick={() => alternatePasswordVisibility()}
              name="eye-outline"
            ></ion-icon>
          ) : (
            <ion-icon
              onClick={() => alternatePasswordVisibility()}
              name="eye-off-outline"
            ></ion-icon>
          )}
        </PasswordDiv>
        <StyledInput
          type={passwordVisibility === "hidden" ? "password" : ""}
          placeholder="Confirme a senha"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <ErrorUl>
          {errorLog.map((errorMessage, index) => {
            return <li key={index}>Error: {errorMessage}</li>;
          })}
        </ErrorUl>
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
  height: ${(props) => (props.errorLog === [] ? "450px" : "550px")};

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

const PasswordDiv = styled.div`
  display: flex;
  justify-content: center;

  position: relative;

  width: 100%;
  max-width: 500px;
  height: 58px;

  border-radius: 5px;

  border: none;

  margin-bottom: 13px;

  ion-icon {
    position: absolute;
    right: 35px;
    top: 15px;

    cursor: pointer;

    font-size: 30px;
  }
`;

const ErrorUl = styled.ul`
  li {
    color: #cc0000;
    font-size: 20px;
    margin-block: 10px;
  }
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

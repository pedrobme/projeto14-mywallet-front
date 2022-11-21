import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SigninScreen = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [passwordVisibility, setPasswordVisibility] = useState("hidden"),
    [errorLog, setErrorLog] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginObject = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        process.env.REACT_APP_LOGIN,
        loginObject
      );
      localStorage.setItem("authToken", response.data.authToken);
      localStorage.setItem("username", response.data.username);

      navigate("/wallet");
    } catch (error) {
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
          placeholder="E-mail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <PasswordDiv>
          <StyledInput
            type={passwordVisibility === "hidden" ? "password" : ""}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Senha"
          ></StyledInput>
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
        <ErrorUl>
          {errorLog.map((errorMessage, index) => {
            return <li key={index}>Error: {errorMessage}</li>;
          })}
        </ErrorUl>
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
  height: ${(props) => (props.errorLog === [] ? "300px" : "400px")};

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

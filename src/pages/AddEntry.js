import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const AddEntry = () => {
  const { entrytype } = useParams();

  const authToken = localStorage.getItem("authToken");

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [errorLog, setErrorLog] = useState([]);

  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();

    const newEntryObject = {
      amount: amount,
      description: description,
      type: entrytype,
    };

    try {
      if (entrytype === "gain") {
        const response = await axios.post(
          process.env.REACT_APP_ADDGAIN,
          newEntryObject,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        console.log(response);
      } else if (entrytype === "loss") {
        const response = await axios.post(
          process.env.REACT_APP_ADDLOSS,
          newEntryObject,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        console.log(response);
      }
      navigate(`/wallet`);
    } catch (error) {
      console.log(error);
      setErrorLog(error.response.data);
    }
  };

  return (
    <ScreenContainer>
      <StyledHeader>
        {entrytype === "gain" && "Nova entrada"}
        {entrytype === "loss" && "Nova saída"}
      </StyledHeader>
      <StyledForm onSubmit={(event) => handleClick(event)}>
        <StyledInput
          placeholder="Valor"
          onChange={(event) => setAmount(event.target.value)}
        />
        <StyledInput
          placeholder="Descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <ErrorUl>
          {errorLog.map((errorMessage, index) => {
            return <li key={index}>Error: {errorMessage}</li>;
          })}
        </ErrorUl>
        <StyledButton type="submit">
          {entrytype === "gain" && "Salvar entrada"}
          {entrytype === "loss" && "Salvar saída"}
        </StyledButton>
      </StyledForm>
      <Link to="/wallet">Voltar!</Link>
    </ScreenContainer>
  );
};

export default AddEntry;

// Styled components

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100vw;
  height: 400px;

  padding: 25px;

  a {
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  margin-bottom: 50px;

  font-size: 26px;
  font-weight: 700;
  font-family: "Raleway", sans-serif;

  color: #ffffff;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 500px;

  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
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

const ErrorUl = styled.ul`
  li {
    color: #cc0000;
    font-size: 20px;
    margin-block: 10px;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  max-width: 326px;
  height: 46px;

  background: #a328d6;
  border-radius: 5px;

  border: none;

  margin-block: 30px;

  font-weight: 700;
  font-size: 20px;

  cursor: pointer;

  color: #ffffff;
`;

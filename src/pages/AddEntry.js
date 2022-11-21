import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

const AddEntry = () => {
  const { entrytype } = useParams();

  const { authToken } = useContext(AuthContext);

  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

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
          "http://localhost:5000/entry/gain",
          newEntryObject,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        console.log(response);
      } else if (entrytype === "loss") {
        const response = await axios.post(
          "http://localhost:5000/entry/loss",
          newEntryObject,
          {
            headers: { Authorization: `Bearer ${authToken}` },
          }
        );
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }

    navigate(`/wallet`);
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
        <StyledButton type="submit">
          {entrytype === "gain" && "Salvar entrada"}
          {entrytype === "loss" && "Salvar saída"}
        </StyledButton>
      </StyledForm>
    </ScreenContainer>
  );
};

export default AddEntry;

// Styled components

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  padding: 25px;
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

const StyledButton = styled.button`
  width: 100%;
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

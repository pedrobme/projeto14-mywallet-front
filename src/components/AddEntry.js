import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const AddEntry = () => {
  const { entrytype } = useParams();

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();

    navigate(`/wallet`);
  };

  const EntryJsx = () => {
    const GainJsx = (
      <ScreenContainer>
        <StyledHeader>Nova Entrada</StyledHeader>
        <StyledForm onSubmit={(event) => handleClick(event)}>
          <StyledInput placeholder="Valor" />
          <StyledInput placeholder="Descrição" />
          <StyledButton type="submit">Salvar entrada</StyledButton>
        </StyledForm>
      </ScreenContainer>
    );

    const LossJsx = (
      <ScreenContainer>
        <StyledHeader>Nova Saída</StyledHeader>
        <StyledForm onSubmit={(event) => handleClick(event)}>
          <StyledInput placeholder="Valor" />
          <StyledInput placeholder="Descrição" />
          <StyledButton type="submit">Salvar saída</StyledButton>
        </StyledForm>
      </ScreenContainer>
    );

    switch (entrytype) {
      case "gain":
        return GainJsx;

      case "loss":
        return LossJsx;

      default:
        break;
    }
  };

  return <EntryJsx />;
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

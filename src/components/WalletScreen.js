import styled from "styled-components";

const WalletScreen = (props) => {
  const { token } = props;

  return (
    <ScreenContainer>
      <StyledHeader>
        <p>Olá, Fulano</p>
        <ion-icon name="log-out-outline"></ion-icon>
      </StyledHeader>
      <MainContent>
        <WalletDiv>
          <WalletHistoryUl>
            <li>
              <EntryInfo>
                <EntryDate>30/11</EntryDate>
                <EntryDescription>
                  Almoço na minha mãe nao esquecer de pagar ela em até uma
                  semana
                </EntryDescription>
              </EntryInfo>
              <EntryAmount>39,90</EntryAmount>
            </li>
          </WalletHistoryUl>
          <WalletBalance>
            <p>SALDO</p>
            <p>39,40</p>
          </WalletBalance>
        </WalletDiv>
        <InsertEntriesButtons>
          <button>
            <div>
              <ion-icon name="add-circle-outline"></ion-icon>
              <p>Nova entrada</p>
            </div>
          </button>
          <button>
            <div>
              <ion-icon name="remove-circle-outline"></ion-icon>
              <p>Nova saída</p>
            </div>
          </button>
        </InsertEntriesButtons>
      </MainContent>
    </ScreenContainer>
  );
};

export default WalletScreen;

// Styled components

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  padding: 25px;
  max-width: 500px;

  justify-content: space-between;
`;

const StyledHeader = styled.header`
  height: 10%;
  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
  }

  ion-icon {
    font-size: 40px;
    color: #ffffff;

    cursor: pointer;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  height: 90%;
`;

const WalletDiv = styled.div`
  height: 78%;
  width: 100%;

  background-color: #ffffff;

  border-radius: 5px;

  p {
    font-size: 16px;
  }
`;

const WalletHistoryUl = styled.ul`
  height: 90%;
  width: 100%;

  padding: 10px;

  overflow: scroll;

  li {
    display: flex;

    justify-content: space-between;
    align-items: center;
  }
`;

const EntryInfo = styled.div`
  display: flex;
  height: 10%;

  align-items: center;

  margin-block: 10px;
`;

const EntryDate = styled.p`
  margin-right: 7px;
  color: #c6c6c6;
`;

const EntryDescription = styled.p`
  color: #000000;

  word-wrap: break-word;
`;

const EntryAmount = styled.p`
  color: #c70000;
`;

const WalletBalance = styled.div`
  width: 100%;
  height: 10%;

  background-color: rgba(0, 0, 0, 0.1);

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 10px;

  p {
    font-size: 17px;

    :first-child {
      font-weight: 700;
      color: #000000;
    }

    :last-child {
      color: #c70000;
    }
  }
`;

const InsertEntriesButtons = styled.div`
  height: 20%;
  width: 100%;

  display: flex;

  justify-content: space-between;

  button {
    width: 48%;
    height: 100%;

    border-radius: 5px;

    border: none;

    cursor: pointer;

    background-color: #a328d6;

    div {
      height: 90%;
      width: 30%;

      display: flex;
      flex-direction: column;

      justify-content: space-between;

      flex-wrap: wrap;
    }

    p {
      font-weight: 700;
      font-size: 17px;

      text-align: start;

      color: #ffffff;
    }

    ion-icon {
      font-size: 30px;
      color: #ffffff;
    }
  }
`;

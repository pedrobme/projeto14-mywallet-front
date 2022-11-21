import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WalletScreen = () => {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");
  const username = localStorage.getItem("username");

  const [walletHistoryList, setWalletHistoryList] = useState([]);
  const [balance, setBalance] = useState(0);
  const [deletedEntry, setDeletedEntry] = useState(0);

  console.log(balance);

  useEffect(() => {
    async function GetWalletHistoryList() {
      try {
        const response = await axios.get("http://localhost:5000/mywallet", {
          headers: { Authorization: `Bearer ${authToken}` },
        });

        setWalletHistoryList(response.data);

        let newBalance = 0;

        response.data.forEach((entryData) => {
          if (entryData.type === "gain") {
            newBalance += Number(entryData.amount);
          } else if (entryData.type === "loss") {
            newBalance -= Number(entryData.amount);
          }
        });

        setBalance(newBalance);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }

    GetWalletHistoryList();
  }, [deletedEntry]);

  const handleClick = (entryType) => {
    navigate(`/entry/${entryType}`);
  };

  const deleteEntry = (entryID) => {
    console.log(entryID);
    axios.delete("http://localhost:5000/mywallet", {
      headers: { Authorization: `Bearer ${authToken}` },
      data: { entryID: entryID },
    });

    setDeletedEntry(deletedEntry + 1);
  };

  return (
    <ScreenContainer>
      <StyledHeader>
        <p>Olá, {username}</p>
        <ion-icon
          onClick={() => navigate("/")}
          name="log-out-outline"
        ></ion-icon>
      </StyledHeader>
      <MainContent>
        <WalletDiv>
          <WalletHistoryUl>
            {walletHistoryList.map((entryObject, index) => {
              return (
                <li key={index}>
                  <EntryInfo>
                    <EntryDate>{entryObject.date}</EntryDate>
                    <EntryDescription>
                      {entryObject.description}
                    </EntryDescription>
                  </EntryInfo>
                  <ControlDiv>
                    <EntryAmount type={entryObject.type}>
                      {entryObject.amount}
                    </EntryAmount>
                    <ion-icon
                      onClick={() => deleteEntry(entryObject._id)}
                      name="remove-circle-outline"
                    ></ion-icon>
                  </ControlDiv>
                </li>
              );
            })}
          </WalletHistoryUl>
          <WalletBalance balance={balance}>
            <p>SALDO</p>
            <p>{balance}</p>
          </WalletBalance>
        </WalletDiv>
        <InsertEntriesButtons>
          <button onClick={() => handleClick("gain")}>
            <div>
              <ion-icon name="add-circle-outline"></ion-icon>
              <p>Nova entrada</p>
            </div>
          </button>
          <button onClick={() => handleClick("loss")}>
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
  color: ${(props) => props.type === "gain" && "#3cc502"};
  color: ${(props) => props.type === "loss" && "#cc0000"};
`;

const ControlDiv = styled.div`
  display: flex;

  align-items: center;

  ion-icon {
    font-size: 15px;
    margin-left: 5px;

    cursor: pointer;
  }
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
      color: ${(props) => (props.balance <= 0 ? "#cc0000" : "#3cc502")};
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

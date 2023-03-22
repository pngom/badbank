import{useState} from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { useBankContext } from "../utils/BankContext";

function Deposit() {
    const [depositAmount, setDepositAmount] = useState(0);
    const [accountBalance, setAccountBalance] = useState(100); // initial balance of $100
    const {bank} = useBankContext();

    const handleDeposit = (event) => {
      event.preventDefault();
      setAccountBalance(accountBalance + depositAmount);
      bank.users.push({balance:`${accountBalance + depositAmount}`});
      alert(`Deposit successful. New balance: $${accountBalance + depositAmount}`);
    };
  
    return (
      <>
        <div className="d-outside-card">
          <Card color="info" className="center-card" style={{ marginTop: "30px" }}>
            <CardBody>
              <CardTitle className="d-white-text" tag="h4">
                Deposit Amount
              </CardTitle>
              <hr className="line"></hr>
              <CardSubtitle className="d-white-text">
                Account Balance ${accountBalance}
              </CardSubtitle>
              <br />
  
              <form onSubmit={handleDeposit}>
                <input
                  type="number"
                  width="200"
                  value={depositAmount}
                  onChange={(event) => setDepositAmount(Number(event.target.value))}
                  placeholder="$ Enter Deposit Amount Here"
                ></input>
                <br /> <br />
                <input className="submit" type="submit" width="200" value="Submit" disabled={!depositAmount}></input>
              </form>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
  
  export default Deposit;
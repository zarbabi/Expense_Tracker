import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransactions }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <p>Balance:{income - expense}</p>
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className={`btn ${isShow && "cancel"} `}
        >
          {!isShow ? "Add" : "Cancel"}
        </button>
      </div>
      {isShow && <TransActionForm addTransactions={addTransactions} />}
      <div className="resultSection">
        <div className="expenseBox">
          Expense <span style={{ color: "red" }}> {expense} $</span>
        </div>
        <div className="expenseBox">
          Income <span>{income} $</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;

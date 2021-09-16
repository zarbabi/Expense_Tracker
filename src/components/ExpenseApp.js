import { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(1);
  const [transactions, setTransactions] = useState([]);
  return (
    <section className="container">
      <OverViewComponent income={income} expense={expense} />

      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;

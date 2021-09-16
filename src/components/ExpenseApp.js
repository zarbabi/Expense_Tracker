import { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const addTransactions = (formValues) => {
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
  };
  return (
    <section className="container">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransactions={addTransactions}
      />

      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;

const TransActionForm = () => {
  return (
    <form>
      <input type="text" name="desc" />
      <input type="number" name="amount" />
      <div>
        <input type="radio" value="expense" name="type" />
        <label>Expense</label>
        <input type="radio" value="income" name="type" />
        <label>Income</label>
      </div>
      <button>Add Transaction</button>
    </form>
  );
};

export default TransActionForm;

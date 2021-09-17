import { useEffect, useState } from "react";

const TransactionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredtnx, setFilteredtnx] = useState(transactions);

  const filterTransaction = (search) => {
    if (!search || search === "") {
      setFilteredtnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredtnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransaction(e.target.value);
  };

  useEffect(() => {
    filterTransaction(searchItem);
  }, [transactions]);

  if (!transactions.length) return <h3>add some transactions</h3>;

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="search for tnx..."
        className="search"
      />
      {filteredtnx.length
        ? filteredtnx.map((t) => (
            <div
              key={t.id}
              className="transaction"
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          ))
        : "no item matchs !"}
    </section>
  );
};

export default TransactionComponent;

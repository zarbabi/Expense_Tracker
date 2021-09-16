import { useState } from "react";
import TransActionForm from "./TransActionForm";
const OverViewComponent = ({ income, expense }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="topSection">
        <p>Balance:{income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {!isShow ? "Add" : "Cancel"}
        </button>
      </div>
      {isShow && <TransActionForm/>}
      <div className="resultSection">
        <div>expense {expense}</div>
        <div>income {income}</div>
      </div>
    </>
  );
};

export default OverViewComponent;

import React, {useState} from "react";

const BingoCell = ({ id, content, clicked, handleCellChange }) => {
  const [image] = useState(["cell-selected", "cell-selected2"][Math.floor(Math.random()*2)])
  return (
    <div
      className={clicked ? `cell ${image}` : "cell"}
      onClick={() => handleCellChange(id)}
    >
      <div className={"cell-full " + (clicked ? "cell-full-selected" : "")}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default BingoCell;

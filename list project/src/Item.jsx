import React from "react";

function Item({ index, item, removeItem }) {
  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <span style={{ flex: 1 }}>{item}</span>
      <button onClick={() => removeItem(index)}>Delete</button>
    </li>
  );
}

export default Item;

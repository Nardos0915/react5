import React from "react";
import Item from "./Item.jsx";

function ItemList({ items, removeItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
          removeItem={removeItem}
        />
      ))}
    </ul>
  );
}

export default ItemList;

import React, { useState } from "react";
import ItemList from "./ItemList.jsx";
import AddItemForm from "./AddItemForm.jsx";

function App() {
  const [items, setItems] = useState([]);

  // Function to add an item
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Function to remove an item
  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Item List</h1>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}

export default App;

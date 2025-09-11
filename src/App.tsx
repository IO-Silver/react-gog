import React from "react";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["One", "Two", "Three", "Four"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Numbers" onSelectItem={handleSelectItem} />
    </div>
  );
}

export default App;

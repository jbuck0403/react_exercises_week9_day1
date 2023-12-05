import { useState } from "react";
import "./App.css";

import InputForm from "./components/InputForm/InputForm";
import List from "./components/List/List";
import Title from "./components/Title/Title";

function App() {
  const [listItems, setListItems] = useState<string[]>([]);
  const listName = "To Do";

  const updateListItems = (newItem: string) => {
    if (newItem.trim() !== "") {
      setListItems((currentList) => {
        return [...currentList, newItem];
      });
    }
  };
  return (
    <>
      {/* displays a different message if list is empty */}
      <Title list={listItems} title={listName} />
      {/* accepts inputs to add to list */}
      <InputForm
        updateListItems={updateListItems}
        listLength={listItems.length}
        defaultPlaceholder={listName}
      />
      {/* displays inputs added from field */}
      <List listItems={listItems} />
    </>
  );
}

export default App;

import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is Mathematics ?",
    content: "Maths is good subject to study at school",
  },
  {
    title: "How does Math relate to reality ?",
    content: "Maths helps calculate daily monetary transactions",
  },
  { title: "How do you learn Math ?", content: "Just learn by doing " },
];
const options = [
  { label: "Red color", value: "red" },
  { label: "Blue color", value: "blue" },
  { label: "Green color", value: "green" },
];
const App = () => {
  const [showDropDown, setShowDropDown] = useState(true);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button
        className="ui button"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        Toggle dropdown
      </button>
      {showDropDown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};

export default App;

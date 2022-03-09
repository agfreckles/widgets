import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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
const App = () => {
  return (
    <div className="ui container">
      <br />
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};

export default App;

import React from "react";
import Accordion from "./components/Accordion";

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
    <div>
      <br />
      <Accordion items={items} />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import axios from "axios";
import Route from "./components/Route";
import Header from "./components/Header";

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

const URL = "https://jsonplaceholder.typicode.com/users";
const App = () => {
  const [showDropDown, setShowDropDown] = useState(true);
  const [selected, setSelected] = useState(options[0]);
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const {data} = await axios.get(URL,{},{});
  //     setUsers(data)
  //   };
  //   getUsers();
  // }, []);
  // const renderedUsers = users.map((user) => {
  //   return <li key={user.id}>{user.name}</li>;
  // });
  // const show = () => {
  //   const currentPath = window.location.pathname;
  //   if (currentPath === "/") {
  //     return <Accordion items={items} />;
  //   } else if (currentPath === "/translate") {
  //     return <Translate />;
  //   } else if (currentPath === "/search") {
  //     return <Search />;
  //   } else {
  //     return (
  //       <div>
  //         <button
  //           className="ui button"
  //           onClick={() => setShowDropDown(!showDropDown)}
  //         >
  //           Toggle dropdown
  //         </button>
  //         {showDropDown ? (
  //           <Dropdown
  //             label="Select a color"
  //             options={options}
  //             selected={selected}
  //             onSelectedChange={setSelected}
  //           />
  //         ) : null}
  //       </div>
  //     );
  //   }
  // };
  return (
    <div className="ui container">
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};

export default App;

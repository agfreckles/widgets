import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  let [counter, setCounter] = useState(0);
  const handleTitleClick = (index) => {
    setActiveIndex(index);
  };
  const counterClick = (counter) => {
    setCounter(counter);
  };
  const renderedItems = items.map((item, i) => {
    const active = i === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => handleTitleClick(i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
        <button className="button ui" onClick={() => counterClick(counter++)}>
          Click me
        </button>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <div>{counter}</div>
    </div>
  );
};
export default Accordion;

import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const clickEventListener = (e) => {
    if (ref.current && ref.current.contains(e.target)) return;
    setOpen(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", clickEventListener, {
      capture: true,
    });
    return () => {
      document.body.removeEventListener("click", clickEventListener);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) return null;
    return (
      <div
        onClick={() => {
          onSelectedChange(option);
        }}
        key={option.value}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;

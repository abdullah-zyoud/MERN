import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ selectTab }) => {
  const [Tab, setTab] = useState(0);

  const handleTab = (number) => {
    setTab(number);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {selectTab.map((head, number) => (
          <div
            key={number}
            className={`tab-header ${number === Tab ? "active" : ""}`}
            onClick={() => handleTab(number)}
          >
            {head.label}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {selectTab.map((head, number) => (
          <div
            key={number}
            className={`tab-content ${number === Tab ? "active" : ""}`}
          >
            {head.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
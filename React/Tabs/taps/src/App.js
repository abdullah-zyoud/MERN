import React from "react";
import "./App.css";
import Tabs from "./components/Tabs";

function App() {
  const tabs = [
    {
      label: "Tab 1",
      content: <p>Tab 1 Content Showing Here</p>,
    },
    {
      label: "Tab 2",
      content: <p>Tab 2 Content Showing Here</p>,
    },
    {
      label: "Tab 3",
      content: <p>Tab 3 Content Showing Here</p>,
    },
  ];

  return (
    <div className="app">
      <Tabs selectTab={tabs} />
    </div>
  );
}

export default App;
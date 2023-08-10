import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

import Params from "./components/Text";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route element={<Params />} path="/:string" />
        <Route element={<Params />} path="/:string/:color/:bgcolor" />
        <Route element={<Params />} path="/:string/:color" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
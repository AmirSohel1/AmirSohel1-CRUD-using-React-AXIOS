import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Edit from "./components/Edit";
import Create from "./components/Create";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

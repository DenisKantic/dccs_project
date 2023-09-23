import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/Certificate" element={<Home></Home>} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

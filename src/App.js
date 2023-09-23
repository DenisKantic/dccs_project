import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Certificate from "./Components/CertificateOverview/Certificate";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Certificate" element={<Certificate />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Certificate from "./Components/CertificateOverview/Certificate";
import CreateCert from "./Components/CreateCertificate/CreateCert";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Certificate" element={<Certificate />} ></Route>
      <Route path="/CreateCertification" element={<CreateCert />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

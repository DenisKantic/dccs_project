import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Certificate from "./Components/CertificateOverview/Certificate";
import CreateCert from "./Components/CreateCertificate/CreateCert";
import DeleteCertificate from "./Components/DeleteCertificate/DeleteCertificate";
import EditCertificate from "./Components/EditCertificate/EditCertificate";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Certificates/" element={<Certificate />} ></Route>
      <Route path="/Certificates/CreateCertification" element={<CreateCert />}></Route>
      <Route path="/Certificates/Delete/:id" element={<DeleteCertificate />}></Route>
      <Route path="/Certificates/EditCertificate/:id" element={<EditCertificate />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

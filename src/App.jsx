import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IPSeries from "./pages/IPSeries";
import Commercials from "./pages/Commercials";

export default function App() {
  return (
    <Router basename="/Nmediaservics">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ip-series" element={<IPSeries />} />
        <Route path="/commercials" element={<Commercials />} />
      </Routes>
    </Router>
  );
}

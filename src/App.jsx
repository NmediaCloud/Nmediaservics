import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IPSeries from "./pages/IPSeries";
import Commercials from "./pages/Commercials";
import AnimationVFX from "./pages/AnimationVFX";
import MotionGraphics from "./pages/MotionGraphics";
import About from "./pages/About";
import DigitalMarketing from "./pages/DigitalMarketing";
import TinyWingsBuzz from "./pages/TinyWingsBuzz";
import WorldUnderMyBed from "./pages/WorldUnderMyBed";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"                       element={<Home />} />
        <Route path="/ip-series"              element={<IPSeries />} />
        <Route path="/commercials"            element={<Commercials />} />
        <Route path="/animation-vfx"          element={<AnimationVFX />} />
        <Route path="/motion-graphics"        element={<MotionGraphics />} />
        <Route path="/about"                  element={<About />} />
        <Route path="/digital-marketing"      element={<DigitalMarketing />} />
        <Route path="/ip/tiny-wings-buzz"     element={<TinyWingsBuzz />} />
        <Route path="/ip/world-under-my-bed"  element={<WorldUnderMyBed />} />
      </Routes>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import LandingPage from "./pages/LandingPage";
import TestPage from "./pages/TestPage";
import Survey from "./pages/Survey";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  );
};

export default App;

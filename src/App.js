import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecondPage from "./pages/ScondPage/index";
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/support" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

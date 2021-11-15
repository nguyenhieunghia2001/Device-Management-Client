import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Auth/SignInPage";
import SignUpPage from "./pages/Auth/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/signin" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

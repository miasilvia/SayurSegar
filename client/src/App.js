import "./App.css";
import { NavbarComponent, BodyContent } from "./components/index.js";
import { LoginPage, HomePage, RegisterUserPage } from "./pages/index.js";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/register" exact element={<RegisterUserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

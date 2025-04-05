import "./css/App.css";
import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Practice from "./pages/Practice";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/practice" element={<Practice grade="10" />} />
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

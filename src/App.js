import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import CarDetails from "./pages/CarDetails";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
// Component
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// Style
import GlobalStyles from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path={"/game-tracker"} element={<Home />} />
        <Route path={"/game-tracker/game/:id"} element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

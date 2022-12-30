import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
// Component
import Nav from "./components/Nav";
import GameDetail from "./components/GameDetail";
// Style
import GlobalStyles from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/game/:id"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

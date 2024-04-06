import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return <h1>Hello World</h1>;
}
function About() {
  return <h1>About page goes here🍕</h1>;
}

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
function App() {
  return <h1 class="mt-2">Hello World</h1>;
}
function About() {
  return <h1 class="mt-2">About page goes here🍕</h1>;
}

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <nav className="flex gap-2 py-2 pl-3">
      <Link
        to="/"
        className="px-4 py-2 rounded bg-orange-300 font-bold hover:bg-orange-50"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="px-4 py-2 rounded bg-orange-300 font-bold hover:bg-orange-50"
      >
        About
      </Link>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

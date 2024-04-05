import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
function App() {
  return <h1>Hello World</h1>;
}

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

// Home page
function App() {
  return (
    <>
      <nav class="py-6 px-4 bg-[#FFF7ED] flex items-center justify-between">
        <Link to="/" class="uppercase font-bold text-2xl">
          #vanlife
        </Link>
        <div class="font-semibold">
          <Link to="/about" class="mr-4">
            About
          </Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
      <main class="bg-[url(./images/home-bg.png)] *:relative relative before:content-[''] before:absolute before:inset-0 before:block  before:bg-[rgba(0,0,0,0.46)] grow bg-cover bg-no-repeat text-white px-6">
        <h1 class="text-2xl font-bold mt-16">
          You got the travel plans, we got the travel vans.
        </h1>
        <p class="mt-6">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button class="bg-[#FF8c38] mt-16 py-4 w-full text-center rounded hover:opacity-50">
          Find Your van
        </button>
      </main>
      <footer class="py-6 px-4 flex items-center justify-center bg-[#252525] text-[#AAA] font-semibold">
        <p class="flex items-center">
          <span class="text-2xl">&copy;</span>
          <span>2022</span>
          <span class="uppercase">#valid</span>
        </p>
      </footer>
    </>
  );
}

// About page
function About() {
  return <h1 class="mt-2">About page goes here🍕</h1>;
}

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

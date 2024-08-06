import React from "react";

import "./App.css";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="store"element={<OurStore/>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;

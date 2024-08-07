import React from "react";

import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import WishList from "./components/WishList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Cart from "./components/Cart";
import Resetpassword from "./pages/Resetpassword";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blog" element={<Blog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<WishList/>} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
            <Route path="forgotpassword" element={<Forgotpassword/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="resetpassword" element={<Resetpassword />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

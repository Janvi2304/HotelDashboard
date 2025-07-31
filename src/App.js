import "./App.css";
import Nav from "./Nav";
import Login from "./Login";
import SignUp from "./SignUp";
import MenuCard from "./MenuCard";
import React from "react";
import Footer from "./Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <div>
      <Nav />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/menu" element={<MenuCard />} />
            <Route path="/location" element={<Location />} />
            {/* <Route path="/pagenotfound" element={<PageNotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>

    // <div>
    //   <Nav />
    //   <main>
    //     <Home />
    //     <AboutUs />
    //     <ContactUs />
    //     <Login />
    //     <SignUp />
    //     <MenuCard />
    //     <Location />
    //   </main>
    //   <Footer />
    // </div>

    // <div>
    //   <Nav />
    //   <Home />
    //   <br />
    //   <AboutUs />
    //   <br />
    //   <ContactUs />
    //   <br />
    //   <Login />
    //   <br />
    //   <SignUp />
    //   <br />
    //   <MenuCard />
    //   <br />
    //   <Location />
    //   <br />
    //   <Footer />
    // </div>
  );
}

export default App;

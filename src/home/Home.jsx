// src/home/Home.jsx

import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mx-auto px-4">
        <BookList />
        <Freebook />
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
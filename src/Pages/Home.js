import React from "react";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

function Home() {
  return (
    <div className="home-section">
      <Hero />
      <About />
      <BookAppointment />
      <Footer />
    </div>
  );
}

export default Home;

import React from 'react';
import './index.css';
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
      <div className="all">
          <Navbar />
          <div id="home" className="space"></div>
          <MainPage />
          <div id="about" className="space"></div>
          <About />
          <div id="team" className="space"></div>
          <Team />
          <div id="gallery" className="space"></div>
          <Gallery />
          <div id="contact" className="space"></div>
          <Contact />
          <Footer />
      </div>
  );
}

export default App;

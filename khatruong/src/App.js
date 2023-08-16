import React from 'react';
import Header from "./Components/Header.jsx";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Support from "./Components/Support";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/support" element={<Support/>} />
        </Routes>
        {/* <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <Header />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;

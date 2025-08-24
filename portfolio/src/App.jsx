import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader"; // ✅ Import Loader
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/Work/Work";
import Testnomials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

const App = () => {
  const [loading, setLoading] = useState(true);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Simulate loading (2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // ✅ Show loader first
  }

  // Toggle Theme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testnomials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default App;


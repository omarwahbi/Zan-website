import "./styles/App.css";
import "./styles/ContactForm.css";
import "./styles/Form.css";
import "./styles/GallerySlider.css";
import "./styles/HomeCarousel.css";
import "./styles/HowTo.css";
import "./styles/Navbar.css";
import "./styles/About.css";
import "./styles/Projects.css";
import "./styles/Footer.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/outdoor"
          element={<Project category={"outdoor"} />}
        />
        <Route
          path="/projects/indoor"
          element={<Project category={"indoor"} />}
        />
        <Route
          path="/projects/gates"
          element={<Project category={"gates"} />}
        />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;

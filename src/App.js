import "./styles/App.css";
import "./styles/ContactForm.css";
import "./styles/Form.css";
import "./styles/GallerySlider.css";
import "./styles/HomeCarousel.css";
import "./styles/HowTo.css";
import "./styles/Navbar.css";
import "./styles/About.css";
import "./styles/Projects.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

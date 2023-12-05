import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 Error</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

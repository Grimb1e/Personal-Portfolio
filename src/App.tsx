import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;

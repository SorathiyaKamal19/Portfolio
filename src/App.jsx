import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/portfolio.css";
import "./styles/mediaquery.css"
import Footer from "./components/Footer";
import Navbarcontent from "./components/Navbarcontent";
import Home from "./components/Home";
import Skills from "./components/Skills"
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Resume from "./components/Resume";



function App() {
  return (
    <>
      <Router>
        <Navbarcontent  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />


          <Route path="*" element={<PageNotFound />} />


        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

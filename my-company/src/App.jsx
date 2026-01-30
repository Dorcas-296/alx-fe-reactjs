import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element= {<About />} />
          <Route path="/services" element= {<Services />} />
          <Route path="/contact" element= {<Contact />} />
        </Routes>
    </>
  );
}

export default App;

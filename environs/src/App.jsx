import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import Donation from "./pages/pages/Donation";
import Causes from "./pages/Causes";
import Events from "./pages/Events";
import Blog from "./pages/pages/Blog";
import Gallery from "./pages/pages/Gallery";
import Volunteers from "./pages/pages/Volunteers";
import Footer from "./layouts/Footer";
import Error from "./pages/pages/Error";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/error" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="w3-content" style={{ maxWidth: "1100" }}></div>
      {/* static Part */}

      {/* Dynamic Part */}
      <Routes>
        {/* Required Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

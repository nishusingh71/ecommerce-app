import Category from "./pages/Category";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import Language from "./pages/Language";
function App() {
  return (
    <div className="container-fluid ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/language/:slug" element={<Language />} />
      </Routes>
    </div>
  );
}

export default App;

import Router from "./route/Router";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
// import Breadcrumb from "./components/Breadcrum";

function App() {
  return (
    <>
      <Header />
      {/* <Breadcrumb /> */}
      <Router />
      <Footer />
    </>
  );
}

export default App;

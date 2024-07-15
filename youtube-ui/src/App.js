import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Videocard from "./components/Videocard";
import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Videocard></Videocard> */}
      <HomePage></HomePage>
    </div>
  );
}

export default App;

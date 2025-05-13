import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import "react-circular-progressbar/dist/styles.css";
import "animate.css";
const App = () => {
  return (
    <Router className="App">
      <NavBar />
      <Banner />
    </Router>
  );
};

export default App;

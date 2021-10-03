// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/navbar_component";
import Card from "./components/card_component";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <Card></Card>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card from "./card_component";
import AddCard from "./add-contact_component";
function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark d-flex justify-content-between">
        <Link to={"/contact"} className="nav-link">
          <div className="navbar-brand m-auto">Contacts</div>
        </Link>
        <Link to={"/add-contact"} className="nav-link">
          <button className="btn btn-success">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </Link>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/contact"]} component={Card} />
          <Route path="/add-contact" component={AddCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;

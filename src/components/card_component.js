import { Component } from "react";
// import Clock from "./clock_component";
import ContactList from "./contact_component";
import Search from "./search_component";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card h-100 m-auto mt-2">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <div></div>
              <h2 className="text-center">Contacts</h2>

              <button className="btn btn-success">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
            <Search></Search>
            <ContactList></ContactList>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

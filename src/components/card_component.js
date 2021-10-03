import { Component } from "react";
import ContactList from "./contact_component";
import Search from "./search_component";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card h-100 m-auto mt-2">
          <div className="card-body">
            <div className="d-flex justify-content-center mb-3">
              <h2 className="text-center">Contacts</h2>
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

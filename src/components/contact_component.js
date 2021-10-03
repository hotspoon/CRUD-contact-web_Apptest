import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveContacts } from "../actions/contacts";
// import { Link } from "react-router-dom";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentContact: null,
    };
  }

  componentDidMount() {
    this.props.retrieveContacts();
  }

  render() {
    // const { currentContact } = this.state;

    const { contacts } = this.props;
    console.log(contacts);
    return (
      <div>
        <div>
          <ul className="custom-ul list-group">
            {contacts.map((contact, index) => (
              <li className="list-group-item" key={index}>
                {contact.firstName} {contact.lastName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, {
  retrieveContacts,
})(ContactList);

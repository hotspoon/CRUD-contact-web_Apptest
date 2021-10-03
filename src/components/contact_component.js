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
        <ul className="custom-ul list-group">
          {contacts.map((contact, index) => (
            <div className="row mb-2" key={index}>
              <div className="col-md-11" key={index}>
                <li className="list-group-item" key={index}>
                  <i className="fa fa-user-circle" aria-hidden="true" key={index} /> &nbsp;
                  {contact.firstName} {contact.lastName} ({contact.age})
                </li>
              </div>
              <div className="col-md-1">
                <button className="btn text-danger font-size">
                  <i className="fa fa-minus-circle" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          ))}
        </ul>
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

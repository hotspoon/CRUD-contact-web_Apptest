import React, { Component } from "react";
import { connect } from "react-redux";
import { createContact } from "../actions/contacts";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.saveContact = this.saveContact.bind(this);
    this.cobaSubmit = this.cobaSubmit.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      photo: "",
    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangePhoto(e) {
    this.setState({
      photo: e.target.value,
    });
  }

  saveContact() {
    const { firstName, lastName, age, photo } = this.state;
    console.log({ firstName, lastName, age, photo });
    this.props
      .createContact(firstName, lastName, age, photo)
      .then((data) => {
        this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          age: Number(data.age),
          photo: data.photo,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  cobaSubmit() {
    const { firstName, lastName, age, photo } = this.state;
    console.log({ firstName, lastName, age, photo });
    this.props.createContact(firstName, lastName, age, photo);
  }

  render() {
    return (
      <div className="card h-100 m-auto mt-2">
        <div className="card-body">
          <div className="d-flex justify-content-center mb-3">
            <h2 className="text-center">Add Contacts</h2>
          </div>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              name="firstName"
              placeholder="First 
            Name"
            />
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={this.state.lastName}
              onChange={this.onChangeLastName}
              name="lastName"
              placeholder="Last 
            Name"
            />
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              id="Age"
              required
              maxLength="2"
              value={this.state.age}
              onChange={this.onChangeAge}
              name="Age"
              placeholder=" 
            Age"
            />
            <label className="form-label">Foto</label>
            <input
              type="text"
              className="form-control"
              id="Photo"
              required
              value={this.state.photo}
              onChange={this.onChangePhoto}
              name="Photo"
              placeholder=" 
            Foto"
            />
          </div>
          <div className="d-flex justify-content-end">
            <button onClick={this.cobaSubmit} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { createContact })(AddContact);

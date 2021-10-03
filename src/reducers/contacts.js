import { RETRIEVE_CONTACTS } from "../actions/types";

const initialState = [];

function contactReducer(contacts = initialState, action) {
  const { type, payload } = action;

  if (type === RETRIEVE_CONTACTS) {
    return payload;
  } else {
    return contacts;
  }
}

export default contactReducer;

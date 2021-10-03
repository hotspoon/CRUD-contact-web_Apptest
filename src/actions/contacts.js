import { RETRIEVE_CONTACTS, CREATE_CONTACT, DELETE_CONTACT } from "./types";
import DataService from "../services/contact_service";

export const createContact = (firstName, lastName, age, photo) => async (dispatch) => {
  try {
    age = Number(age);
    const postData = { firstName, lastName, age, photo };
    const res = await DataService.create(postData);
    dispatch({
      type: CREATE_CONTACT,
      payload: res.data,
    });
    console.log(res.data);
    alert("Sukses");
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveContacts = () => async (dispatch) => {
  try {
    const res = await DataService.getAll();
    const data = res.data.data;
    console.table(data);

    dispatch({
      type: RETRIEVE_CONTACTS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await DataService.delete(id);

    dispatch({
      type: DELETE_CONTACT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

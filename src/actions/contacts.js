import { RETRIEVE_CONTACTS } from "./types";
import DataService from "../services/contact_service";

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

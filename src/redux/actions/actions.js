import { ADD_USERS, DELETE_USER } from "./actionType";

export const addData = (formData, date) => {
  return {
    type: ADD_USERS,
    payload: {
      id: new Date().getTime().toString(),
      formData: formData,
      date: date,
    },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: {
      id,
    },
  };
};

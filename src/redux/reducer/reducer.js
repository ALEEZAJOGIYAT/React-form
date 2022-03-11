import { ADD_USERS } from "../actions/actionType";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      const { formData } = action.payload;
      console.log("***", state);
      return {
        ...state,
        data: formData,
      };
    default:
      return state;
  }
};

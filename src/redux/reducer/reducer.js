import { ADD_USERS } from "../actions/actionType";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      const { formData, id,date } = action.payload;

      return {
        ...state,
        data: [
          ...state.data,
          {
            formData: formData,
            id: id,
            date:date,
          },
        ],
      };
    default:
      return state;
  }
};

import { ADD_USERS } from "../actions/actionType";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      const { formData, id } = action.payload;

      return {
        ...state,
        data: [
          ...state.data,
          {
            formData: formData,
            id: id,
          },
        ],
      };
    default:
      return state;
  }
};

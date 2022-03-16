import { ADD_USERS, DELETE_USER } from "../actions/actionType";

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
      case DELETE_USER:
        const del=state.data.filter((item)=>item.id!==action.payload.id)
        return{
          ...state,
          data:[
            ...del
          ]
        }

    default:
      return state;
  }
};

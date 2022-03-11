import { ADD_USERS,SHOW_USERS } from "./actionType";

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


// export const showUsers=(formData,id)=>{
//   return{
//     type:SHOW_USERS,
//     payload:{
//       id,
//       formData,
//     }
//   }
// }
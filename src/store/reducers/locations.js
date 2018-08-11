import { GET_LOCATIONS } from '../actionTypes';

const initialState = {
  locations: [
    {
      img_path: "/images/3.png",
      location: "East Josianefurt",
      address: "085 Daron Via"
    },
    {
      img_path: "/images/4.png",
      location: "South Christopherport",
      address: "162 Chandler Ville"
    },
    {
      img_path: "/images/5.png",
      location: "Concepcionbury",
      address: "7643 Kylie Burgs"
    },
    {
      img_path: "/images/5.png",
      location: "Reychester",
      address: "5590 Gabe View Apt. 044"
    }
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_LOCATIONS:
      return {...state, locations: [ ...state.locations, action.locations ] };
    default:
      return state;
  }
}
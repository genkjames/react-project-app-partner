import { GET_ARTICLES } from '../actionTypes';

const initialState = {
  articles: [
    {
      img: "",
      heading: "Regional Cuisine Down Home Southern Cooking"
    },
    {
      img: "",
      heading: "Pos Hardware More Options In Less Space"
    }
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ARTICLES:
      return { ...state, articles: [...state.articles, action.articles ] }
    default:
      return state;
  }
}
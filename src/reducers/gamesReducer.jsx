const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  name: "",
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
        name: action.payload.name,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
        name: "",
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;

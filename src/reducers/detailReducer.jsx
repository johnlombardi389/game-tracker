const initState = {
  game: {},
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        game: action.payload.game,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;

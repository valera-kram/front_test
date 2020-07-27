export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER_PROFILE":
      return { ...state, [0]: action.payload.user };
    default:
      return state;
  }
};

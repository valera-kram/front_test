const INITIAL_STATE = {
  access_token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        access_token: action.payload.access_token,
      };
    case "SIGN_OUT":
      return {
        ...state,
        access_token: null,
      };
    default:
      return state;
  }
};

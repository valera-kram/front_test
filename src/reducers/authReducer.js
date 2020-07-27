const INITIAL_STATE = {
  isSignedIn: null,
  access_token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isSignedIn: true,
        access_token: action.payload.access_token,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isSignedIn: false,
        access_token: null,
      };
    default:
      return state;
  }
};

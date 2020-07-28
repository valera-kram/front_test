import { getProfileRoutine } from "../actions";

export default (state = { user: {} }, action) => {
  if (getProfileRoutine.isSuccessAction(action)) {
    const { data } = action.payload;

    return {
      ...state,
      user: data.user,
    };
  }
  return state;
};

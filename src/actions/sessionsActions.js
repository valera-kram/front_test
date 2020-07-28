import axios from "axios";
import { createSessionRoutine, deleteSessionRoutine } from "./index";

export const createSession = ({ email, password }) => async (dispatch) => {
  dispatch(createSessionRoutine.request({ email, password }));
  try {
    const response = await axios.post(
      "https://staging.diem.dev/client/sessions",
      {
        email,
        password,
        session: {
          platform_type: "web",
        },
      }
    );
    return dispatch(createSessionRoutine.success(response));
  } catch (error) {
    dispatch(createSessionRoutine.failure(error));
    throw error;
  }
};

export const deleteSession = () => {
  return {
    type: deleteSessionRoutine,
  };
};

import axios from "axios";

export const signIn = ({ email, password }) => async (dispatch) => {
  const session = {
    email,
    password,
    session: {
      platform_type: "web",
    },
  };

  const response = await axios.post(
    "https://staging.diem.dev/client/sessions",
    session
  );

  console.log(response);

  dispatch({ type: "SIGN_IN", payload: response.data.session });
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

export const fetchUserProfile = (access_token) => async (dispatch) => {
  const response = await axios.get("https://staging.diem.dev/client/profile", {
    params: {
      access_token,
    },
  });

  dispatch({ type: "FETCH_USER_PROFILE", payload: response.data });
};

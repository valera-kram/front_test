import diem from "../apis/diem";
import axios from "axios";

export const signIn = ({ email, password }) => async (dispatch) => {
  const session = {
    session: {
      email: "abram1@diem.health",
      password: "11111111",
      platform_type: "web",
    },
  };

  console.log(session);

  const sessionCreateResponse = await axios.post(
    "https://staging.diem.dev/client/sessions",
    session
  );

  console.log(sessionCreateResponse);

  dispatch({ type: "SIGN_IN", payload: "userId" });
};

// export const signOut = () => {
//   return {
//     type: SIGN_OUT,
//   };
// };

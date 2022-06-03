import { FORGOT_PASSWORD } from "../utils/routes/vasedApiRoutes";
import axios from "axios";

//login service using axios
export const forgotPassword = async (email) => {
  try {
    console.log("hola")
    const response = await axios.post(
      FORGOT_PASSWORD,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

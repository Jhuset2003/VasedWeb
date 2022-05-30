import { LOGIN_ROUTE } from "../utils/routes/vasedApiRoutes";
import axios from "axios";

//login service using axios
export const login = async (email, password) => {
    const response = await axios.post(LOGIN_ROUTE, {
        email,
        password
    });
    console.log(response.data);
};

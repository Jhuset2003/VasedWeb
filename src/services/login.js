import { LOGIN_ROUTE } from "../utils/routes/vasedApiRoutes";
import axios from "axios";

//login service using axios
export const login = async (email, password) => {
    try {
        const response = await axios.post(
            LOGIN_ROUTE,
            {
                email,
                password,
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

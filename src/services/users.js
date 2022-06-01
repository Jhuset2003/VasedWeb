import { CREATE_USER_ROUTE } from "../utils/routes/vasedApiRoutes"
import axios from "axios";

export const createUser = async (user) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.post(CREATE_USER_ROUTE, user, config);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }

}
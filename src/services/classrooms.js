import { CLASSROOM_CREATE_ROUTE } from "../utils/routes/vasedApiRoutes";
import axios from "axios";

export const createClassroom = async (classroom) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.post(CLASSROOM_CREATE_ROUTE, classroom, config);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}
import { TASK_CREATE_ROUTE } from "../utils/routes/vasedApiRoutes";
import axios from "axios";

export const createTask = async (task) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.post(TASK_CREATE_ROUTE, task, config);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}
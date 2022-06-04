import { CREATE_USER_ROUTE, USERS_GET_ROUTE, USER_DELETE_ROUTE, USER_UPDATE_ROUTE } from "../utils/routes/vasedApiRoutes"
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
        return response;
    }
    catch (error) {
        return error.response.data;
    }

}

export const getUsers = async () => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.get(USERS_GET_ROUTE, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}

export const deleteUser = async (userId) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.delete(USER_DELETE_ROUTE + "/" + userId, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}

export const updateUser = async (user) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.put(USER_UPDATE_ROUTE + "/" +  user.id, user, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}
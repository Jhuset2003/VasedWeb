import { CREATE_USER_ROUTE, USERS_GET_ROUTE, USER_DELETE_ROUTE, USER_UPDATE_ROUTE, GET_USER_ROUTE, USERS_GET_TASKS_BY_CLASSROOM, FORGOT_PASSWORD_ROUTE, RESET_PASSWORD_ROUTE, ACTIVATE_ACCOUNT_ROUTE } from "../utils/routes/vasedApiRoutes"
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

export const getOneUser = async (userId) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.get(GET_USER_ROUTE + "/" + userId, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}

export const getListOfUsersBytask = async (taskClassroomId) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.get(`${USERS_GET_TASKS_BY_CLASSROOM}/${taskClassroomId}`, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}

export const forgotPassword = async (email) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.post(FORGOT_PASSWORD_ROUTE, {email}, config);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const resetPassword = async (values) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.post(`${RESET_PASSWORD_ROUTE}/${values.id}/${values.token}`, {password: values.password}, config);
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export const activateAccount = async (values) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.post(`${ACTIVATE_ACCOUNT_ROUTE}/${values.id}/${values.token}`, {password: values.password}, config);
        return response;
    }
    catch (error) {
        return error.response;
    }
}
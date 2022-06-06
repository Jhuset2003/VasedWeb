import { ANSWER_GET_ROUTE, CREATE_NEW_ANSWER_ROUTE, TASK_CREATE_ROUTE, TASK_DELETE_ROUTE, TASK_GET_ROUTE, TASK_UPDATE_ROUTE } from "../utils/routes/vasedApiRoutes";
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
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}

export const getTasks = async () => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.get(TASK_GET_ROUTE, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}

export const deleteTask = async (taskId) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.delete(TASK_DELETE_ROUTE + "/" + taskId, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}

export const updateTask = async (values) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.put(TASK_UPDATE_ROUTE + "/"+ values.id, values, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}


export const getAnswer = async (userTaskClassroomId) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.get(ANSWER_GET_ROUTE + "/" + userTaskClassroomId, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}

export const createAnswer = async (values) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
        const response = await axios.post(CREATE_NEW_ANSWER_ROUTE, values, config);
        return response;
    }
    catch (error) {
        return error.response.data;
    }
}
export const HOST = "https://vased-api.herokuapp.com"
export const API_VERSION = "/api/v1"
export const API_URL = HOST + API_VERSION

export const UTIL_ROUTE = API_URL + "/utils"
export const AUTH_ROUTE = API_URL + "/auth"
export const TASK_ROUTE = API_URL + "/tasks"
export const USER_ROUTE = API_URL + "/users"
export const CLASSROOM_ROUTE = API_URL + "/classrooms"


// auth routes 
export const LOGIN_ROUTE = AUTH_ROUTE + "/login"

// classroom routes
export const CLASSROOM_CREATE_ROUTE = CLASSROOM_ROUTE + "/create-classroom"
export const CLASSROOMS_GET_ROUTE = CLASSROOM_ROUTE + "/"
export const CLASSROOM_DELETE_ROUTE = CLASSROOM_ROUTE + "/delete-classroom"
export const CLASSROOM_UPDATE_ROUTE = CLASSROOM_ROUTE + "/update-classroom"

// Task routes
export const TASK_CREATE_ROUTE = TASK_ROUTE + "/create-task"
export const TASK_GET_ROUTE = TASK_ROUTE + "/"
export const TASK_DELETE_ROUTE = TASK_ROUTE + "/delete-task"

// User routes
export const CREATE_USER_ROUTE = USER_ROUTE + "/create-user"
export const USERS_GET_ROUTE = USER_ROUTE + "/"
export const USER_DELETE_ROUTE = USER_ROUTE + "/delete-user"
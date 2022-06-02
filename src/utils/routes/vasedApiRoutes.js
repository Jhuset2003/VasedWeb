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
export const REGISTER_ROUTE = AUTH_ROUTE + "/register"

// classroom routes
export const CLASSROOM_CREATE_ROUTE = CLASSROOM_ROUTE + "/create-classroom"
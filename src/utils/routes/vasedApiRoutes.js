export const HOST = "https://vased-api.herokuapp.com"
export const API_VERSION = "/api/v1"
export const API_URL = HOST + API_VERSION

export const UTIL_ROUTE = API_URL + "/utils"
export const AUTH_ROUTE = API_URL + "/auth"
export const TASK_ROUTE = API_URL + "/tasks"
export const USER_ROUTE = API_URL + "/users"
export const CLASSROOM_ROUTE = API_URL + "/classrooms"
export const ANSWER_ROUTE = API_URL + "/answers"


// auth routes 
export const LOGIN_ROUTE = AUTH_ROUTE + "/login"
export const FORGOT_PASSWORD_ROUTE = AUTH_ROUTE + "/forgot-password"
export const RESET_PASSWORD_ROUTE = AUTH_ROUTE + "/reset-password"
export const ACTIVATE_ACCOUNT_ROUTE = AUTH_ROUTE + "/activate-account"

// classroom routes
export const CLASSROOM_CREATE_ROUTE = CLASSROOM_ROUTE + "/create-classroom"
export const CLASSROOMS_GET_ROUTE = CLASSROOM_ROUTE + "/"
export const CLASSROOM_DELETE_ROUTE = CLASSROOM_ROUTE + "/delete-classroom"
export const CLASSROOM_UPDATE_ROUTE = CLASSROOM_ROUTE + "/update-classroom"
export const CLASSROOM_ADD_USER = CLASSROOM_ROUTE + "/add-user"
export const CLASSROOM_ADD_TASK = CLASSROOM_ROUTE + "/add-task"
export const CLASSROOM_DELETE_TASK = CLASSROOM_ROUTE + "/delete-task"
export const CLASSROOM_DELETE_USER = CLASSROOM_ROUTE + "/delete-user"

// Task routes
export const TASK_CREATE_ROUTE = TASK_ROUTE + "/create-task"
export const TASK_GET_ROUTE = TASK_ROUTE + "/"
export const TASK_DELETE_ROUTE = TASK_ROUTE + "/delete-task"
export const TASK_UPDATE_ROUTE = TASK_ROUTE + "/update-task"
export const ANSWER_GET_ROUTE = TASK_ROUTE + "/answer"
export const GET_USER_TASK_CLASSROOMS = TASK_ROUTE + "/user-task-classrooms"


// User routes
export const CREATE_USER_ROUTE = USER_ROUTE + "/create-user"
export const USERS_GET_ROUTE = USER_ROUTE + "/"
export const USER_DELETE_ROUTE = USER_ROUTE + "/delete-user"
export const USER_UPDATE_ROUTE = USER_ROUTE + "/update-user"
export const GET_USER_ROUTE = USER_ROUTE + "/"
export const USERS_GET_TASKS_BY_CLASSROOM = USER_ROUTE + "/users-by-taskClassroomId"

//intermediate routes queries
export const CLASSROOM_ADD_USER_TASK = TASK_ROUTE + "/add-user-task-classroom"
export const GET_ANSWERS_BY_USER_ROUTE = ANSWER_ROUTE + "/"
export const CREATE_NEW_ANSWER_ROUTE = ANSWER_ROUTE + "/create-answer" //POST
export const ADD_FEEDBACK = ANSWER_ROUTE + "/add-feedback" //POST

// answer routes
export const GET_ANSWERS_BY_USER = ANSWER_ROUTE
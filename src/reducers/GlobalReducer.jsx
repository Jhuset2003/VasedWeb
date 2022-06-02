import { v4 } from "uuid";

export default function GlobalReducer(state, action) {
  switch (action.type) {
    case "SET_CLASSROOMS":
      return {
        ...state,
        classrooms: action.payload,
      };

    case "SET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };

    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "ADD_CLASSROOM":
      return {
        ...state,
        classrooms: [...state.classrooms, action.payload],
      };

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "DELETE_CLASSROOM":
      return {
        ...state,
        classrooms: state.classrooms.filter(
          (classroom) => classroom.id !== action.payload
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case "UPDATE_CLASSROOM":
      return {
        ...state,
        classrooms: state.classrooms.map((classroom) =>
          classroom.id === action.payload.id ? action.payload : classroom
        ),
      };

    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };

    case "DELETE_TEACHER_FROM_CLASSROOM":
      return {
        ...state,
        classrooms: state.classrooms.map((classroom) =>
          classroom.id === action.payload.classroomId
            ? {
                ...classroom,
                users: {
                  ...classroom.users,
                  teachers: classroom.teachers.filter(
                    (teacher) => teacher.id !== action.payload.teacherId
                  ),
                },
              }
            : classroom
        ),
      };

    case "DELETE_STUDENT_FROM_CLASSROOM":
        return {
            ...state,
            classrooms: state.classrooms.map((classroom) =>{
                return classroom.id === action.payload.classroomId ? {
                    ...classroom,
                    users: {
                        ...classroom.users,
                        students: classroom.students.filter(
                            (student) => student.id !== action.payload.studentId
                        ),
                    },
                } : classroom
            })
        }

    case "DELETE_TASK_FROM_CLASSROOM":
        return {
            ...state,
            classrooms: state.classrooms.map((classroom) =>{
                return classroom.id === action.payload.classroomId ? {
                    ...classroom,
                    tasks: classroom.tasks.filter(
                        (task) => task.id !== action.payload.taskId
                    ),
                } : classroom
            })
        }    
    
    case "ADD_TEACHER_TO_CLASSROOM":
        return {
            ...state,
            classrooms: state.classrooms.map((classroom) =>{
                return classroom.id === action.payload.classroomId ? {
                    ...classroom,
                    users: {
                        ...classroom.users,
                        teachers: [...classroom.users.teachers, action.payload.teacher],
                    },
                } : classroom
            })
        }
    
    case "ADD_STUDENT_TO_CLASSROOM":
        return {
            ...state,
            classrooms: state.classrooms.map((classroom) =>{
                return classroom.id === action.payload.classroomId ? {
                    ...classroom,
                    users: {
                        ...classroom.users,
                        students: [...classroom.users.students, action.payload.student],
                    },
                } : classroom
            })
        }

    default:
      break;
  }
}
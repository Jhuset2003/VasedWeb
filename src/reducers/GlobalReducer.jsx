export default function GlobalReducer(state, action) {
    switch (action.type) {
        case "SET_INITIAL_STATE":
            return {
                classrooms: [],
                tasks: [],
                users: [],
            };

        case "SET_EDITING_NULL":
            return {
                ...state,
                classroomEditing: null,
                taskEditing: null,
                userEditing: null,
            };

        case "SET_CLASSROOM_EDITING":
            return {
                ...state,
                classroomEditing: action.payload,
            };

        case "SET_TASK_EDITING":
            return {
                ...state,
                taskEditing: action.payload,
            };

        case "SET_USER_EDITING":
            return {
                ...state,
                userEditing: action.payload,
            };

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
                    classroom.id === action.payload.id
                        ? action.payload
                        : classroom
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
                                  teachers: classroom.users.teachers.filter(
                                      (teacher) =>
                                          teacher.id !==
                                          action.payload.teacherId
                                  ),
                              },
                          }
                        : classroom
                ),
                users: state.users.map((user) => {
                    if (user.id == action.payload.teacherId) {
                        return {
                            ...user,
                            classrooms: user.classrooms.filter(
                                (classroom) =>
                                    classroom.id != action.payload.classroomId
                                
                            )
                        };
                    }
                    return user;
                })
            };

        case "DELETE_STUDENT_FROM_CLASSROOM":
            return {
                ...state,
                classrooms: state.classrooms.map((classroom) => {
                    return classroom.id === action.payload.classroomId
                        ? {
                              ...classroom,
                              totalStudents: classroom.totalStudents - 1,
                              users: {
                                  ...classroom.users,
                                  students: classroom.users.students.filter(
                                      (student) =>
                                          student.id !== action.payload.studentId
                                  ),
                              },
                          }
                        : classroom;
                }),
                users: state.users.map((user) => {
                    return user.id == action.payload.studentId
                        ? {
                              ...user,
                              classrooms: user.classrooms.filter(
                                  (classroom) =>
                                      classroom.id != action.payload.classroomId
                              ),
                          }
                        : user;
                })
            };

        case "DELETE_TASK_FROM_CLASSROOM":
            return {
                ...state,
                classrooms: state.classrooms.map((classroom) => {
                    return classroom.id === action.payload.classroomId
                        ? {
                              ...classroom,
                              tasks: classroom.tasks.filter(
                                  (task) => task.id !== action.payload.taskId
                              ),
                          }
                        : classroom;
                }),
            };

        case "ADD_TEACHER_TO_CLASSROOM":
            return {
                ...state,
                classrooms: state.classrooms.map((classroom) => {
                    return classroom.id === action.payload.classroom.id
                        ? {
                              ...classroom,
                              users: {
                                  ...classroom.users,
                                  teachers: [
                                      ...classroom.users.teachers,
                                      action.payload.teacher,
                                  ],
                              },
                          }
                        : classroom;
                }),
                users: state.users.map((user) => {
                    return user.id == action.payload.teacher.id
                        ? {
                              ...user,
                              classrooms: [
                                  ...user.classrooms,
                                  action.payload.classroom,
                              ],
                          }
                        : user;
                })
            };

        case "ADD_STUDENT_TO_CLASSROOM":
            return {
                ...state,
                classrooms: state.classrooms.map((classroom) => {
                    return classroom.id === action.payload.classroom.id
                        ? {
                              ...classroom,
                              totalStudents: classroom.totalStudents + 1,
                              users: {
                                  ...classroom.users,
                                  students: [
                                      ...classroom.users.students,
                                      action.payload.student,
                                  ],
                              },
                          }
                        : classroom;
                }),
                users: state.users.map((user) => {
                    return user.id === action.payload.student.id
                        ? {
                              ...user,
                              classrooms: [
                                  ...user.classrooms,
                                  action.payload.classroom,
                              ],
                          }
                        : user;
                })
            };

        case "ADD_TASK_TO_CLASSROOM":
            return {
                ...state,
                classrooms: state.classrooms.map((classroom) => {
                    return classroom.id === action.payload.classroomId
                        ? {
                              ...classroom,
                              tasks: [...classroom.tasks, action.payload.task],
                          }
                        : classroom;
                })
            }
        
        case "ASSIGN_TASK_TO_USER":
            return {
                ...state,
                /* tasks: state.tasks.map((task) => {
                    return task.id === action.payload.taskId
                        ? {
                              ...task,
                              assignedTo: action.payload.userId,
                            }
                        : task;
                }), */
            }

        case "ADD_ANSWER_TO_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    return task.id === action.payload.taskId
                        ? {
                              ...task,
                              answers: action.payload.answer,
                          }
                        : task;
                })
            }
            

        default:
            break;
    }
}




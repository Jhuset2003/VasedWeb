export default function GlobalReducer(state,action){

    switch (action.type) {
        case "ADD_AULA":

            return {
                aulas: [...state.aulas, action.payload]
            }
    
        default:
            break;
    }

    
}
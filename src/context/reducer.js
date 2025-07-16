
import { ADD, REMOVE, UPDATE, TOGGLE } from "./actions";

const reducer = (state,action) => {
    switch (action.type) {
        case ADD:
            return [...state,action.payload]
        case REMOVE:
            return state.filter(task=>task.id!==action.payload.id)
        case UPDATE:
            return state.map(task=>task.id===action.payload.task.id ? action.payload.task :task)
            
        case TOGGLE:
            return state.map(task=>
                task.id===action.payload
                    ? { ...task, status: !task.status }
                    : task
            );
        default:
            return state;
    }
}
export  default reducer
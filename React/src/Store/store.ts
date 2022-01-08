import { Store } from "./types";
import { 
    ActionTypes, 
    SET_EMPLOYEES, 
    SET_USER
} from "./actions";

// Redux implementation
/*
    settings: {
        theme: GetStorage('settings')?.theme || 'light'
    }
*/

function reducer(state: Store = {
    user: { },
    employees: []
}, action: ActionTypes) {
    switch(action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case SET_EMPLOYEES: {
            return {
                ...state,
                employees: action.payload
            }
        }
        default: 
            return state;
    }
}

export default reducer;
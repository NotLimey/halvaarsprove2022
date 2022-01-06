import { Store } from "./types";
import { 
    ActionTypes, 
    SET_USER
} from "./actions";

// Redux implementation
/*
    settings: {
        theme: GetStorage('settings')?.theme || 'light'
    }
*/

function reducer(state: Store = {
    user: { }
}, action: ActionTypes) {
    switch(action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default: 
            return state;
    }
}

export default reducer;
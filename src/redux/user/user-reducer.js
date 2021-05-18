import {UserActionTypes} from './user-types';
// setting initial state for when an action is first fired (state is nothing at first, need to take care of this). be sure to pass this as a default value into reducer
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case (UserActionTypes.SET_CURRENT_USER):
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
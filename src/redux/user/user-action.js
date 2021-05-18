import {UserActionTypes} from './user-types';
//send action to redux store so it can update its state 
//It is a javascript function that returns an action (thats an object)
export const setCurrentUser = user =>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
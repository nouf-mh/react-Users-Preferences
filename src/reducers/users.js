import {LOAD_USERS, AUTH_USER} from "../actions/types.js";

export default function users (state = [], action){
    if(action.type === LOAD_USERS)
        return {users:action.users}
    if(action.type === AUTH_USER){
        return {auth_user:action.authUser , loggedIn:action.loggedIn}
    }
    else{
        return state;
    }
}

// import { INCREMENT, DECREMENT } from "../actions/types.js";

// export default function (state = {conter: 0, date : Date.now()}, action) {
//   if (action.type === INCREMENT) {
//     return {...state , conter: state.conter + 1 , date: Date.now() , actionDate:action.date};
//   }
//   if (action.type === DECREMENT) {
//     return {conter: state.conter - 1};
//   } else {
//     return state;
//   }
// }
import {LOAD_USERS , AUTH_USER} from "./types.js"

export const loadUsers = (data) => {
    return  {
        type:LOAD_USERS,
        users:data};
 };

export const auth = (data) => {
    return  {
        type:AUTH_USER,
        authUser:data,
        loggedIn:data?true:false};
 };
import {LOAD_USERS} from "./types.js"

export const loadUsers = (data) => {
    return  {
        type:LOAD_USERS,
        users:data};
 };
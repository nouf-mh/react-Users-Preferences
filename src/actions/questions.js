import {LOAD_QUESTIONS} from "./types.js"

 export const loadQuestions = (data) => {
    return  {
        type:LOAD_QUESTIONS,
        questions:data};
 };
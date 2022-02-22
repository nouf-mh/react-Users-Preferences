import {LOAD_QUESTIONS} from "../actions/types.js";

export default function questions(state = [], action){
    if(action.type === LOAD_QUESTIONS)
        return {questions:action.questions}
    else{
        return state;
    }
}
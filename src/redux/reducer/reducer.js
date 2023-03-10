import { ActionType } from './../actionType/ActionType';

const initialstate = {
    user:[],
}


const userReducer = (state = initialstate, action) => {
    switch(action.type ) {
        case ActionType.GET_STUDENT_INFO:
            return{
                ...state,
                user: action.payload,
            }
        default:
            return  state;
    }
};

export default userReducer;
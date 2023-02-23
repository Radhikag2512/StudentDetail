import { CombinedState } from "redux";
import usersReducer from './reducer';

const rootReducer = CombinedState({
    users: usersReducer
})

export default rootReducer;
import { ActionType } from './../actionType/ActionType';




const getDetails = (users) => ({
    type: ActionType.GET_STUDENT_INFO,
    payload: users,
});


export default getDetails;
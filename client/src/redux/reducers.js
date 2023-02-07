import * as types from './actionType'

const initialState= {
    projects : [],
    project : {},
    loading : false
}

const projectsReducers = (state = initialState, action)=>{
    switch(action.type){
        case types.GET_PROJECTS : 
        return{
            ...state,
            projects : action.payload,
            loading : false,
        };
        case types.DELETE_PROJECTS : 
        case types.ADD_PROJECTS : 
        return{
            ...state,
            loading : false,
        };
        default :
        return state;
    }
}  

export default projectsReducers;
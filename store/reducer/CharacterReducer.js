import { GET_CHARACTERS_DATA } from "../actions/ActionTypes";

const intitialState = {
    data: [],
    info: {}
}

const characterReducer = (state = intitialState, action) => {

    switch(action.type) {
        case GET_CHARACTERS_DATA: 
            return {
                data: action.data.results,
                info: action.data.info
            }

        default: return state;
    }

}

export default characterReducer;

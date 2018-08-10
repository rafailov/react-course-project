import { FILTER_CARDS_BY_TITLE } from '../actions/types';

const initialState = {
    title: ''
};

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_CARDS_BY_TITLE:
            return {
                ...state,
                title: action.payload
            };

        default:
            return state;
    }
};

export default boardReducer;
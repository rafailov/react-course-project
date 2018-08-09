import { NEW_CARD, FETCH_CARDS } from '../actions/types';

const initialState = {
    new: {},
    all: []
};

const boardReducer = (state = initialState, action) => {
    switch (action.type) {

        case NEW_CARD:
            return {
                ...state,
                new: action.payload
            };

        case FETCH_CARDS:
            return {
                ...state,
                all: action.payload
            };
    }

    return state;
};

export default boardReducer;
import { NEW_BOARD, FETCH_BOARDS } from '../actions/types';

const initialState = {
    new: {},
    all: []
};

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_BOARD:
            return {
                ...state,
                new: action.payload,
            };

        case FETCH_BOARDS:
            return {
                ...state,
                all: action.payload,
            };
    }

    return state;
};

export default boardReducer;
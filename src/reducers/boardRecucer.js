import {NEW_BOARD, FETCH_BOARDS, DELETE_BOARD} from '../actions/types';

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
        case DELETE_BOARD:
            return {
                ...state,
                all: state.all.filter((board) => {
                    if (board.id !== parseInt(action.payload, 10)) {
                        return board;
                    }

                    return null;
                })
            };
        default:
            return state;
    }
};

export default boardReducer;
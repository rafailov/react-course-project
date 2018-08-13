import { NEW_CARD, FETCH_CARDS, DELETE_CARD, GET_CARD } from '../actions/types';

const initialState = {
    new: {},
    all: [],
    current: {}
};

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_CARD:
            return {
                ...state,
                new: action.payload
            };
        case GET_CARD:
            return {
                ...state,
                current: action.payload
            };

        case FETCH_CARDS:
            return {
                ...state
                //: action.payload
            };

        case DELETE_CARD:
            return {
                ...state,
                all: state.all.filter((card) => card.id !== parseInt(action.payload, 10))
            };

        default:
            return state;
    }
};

export default boardReducer;
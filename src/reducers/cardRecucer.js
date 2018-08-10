import { NEW_CARD, FETCH_CARDS, DELETE_CARD } from '../actions/types';

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
                ...state
                //: action.payload
            };

        case DELETE_CARD:
            return {
                ...state,
                all: state.all.filter((card) => {
                        if (card.id !== parseInt(action.payload, 10)) {
                            return card;
                        }

                        return null;
                    })
            };

        default:
            return state;
    }
};

export default boardReducer;
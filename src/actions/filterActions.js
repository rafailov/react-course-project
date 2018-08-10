import { FILTER_CARDS_BY_TITLE } from '../actions/types';

export const filterCards = (filter) => dispatch => {
    dispatch({
        type: FILTER_CARDS_BY_TITLE,
        payload: filter
    });
};
import { combineReducers } from 'redux';
import boardReducer from './boardRecucer';
import cardReducer from './cardRecucer';
import filterReducer from './filterRecucer';

export default combineReducers({
    boards: boardReducer,
    cards: cardReducer,
    filter: filterReducer
});

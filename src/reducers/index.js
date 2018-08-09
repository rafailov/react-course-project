import { combineReducers } from 'redux';
import boardReducer from './boardRecucer';
import cardReducer from './cardRecucer';

export default combineReducers({
    boards: boardReducer,
    cards: cardReducer,
});

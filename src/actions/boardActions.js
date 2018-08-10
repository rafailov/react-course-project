import { NEW_BOARD, FETCH_BOARDS, DELETE_BOARD } from '../actions/types';

export const fetchBoards = () => dispatch => {
    const boards = [
        {id:1, title: 'TO DO'},
        {id:2, title: 'DONE'}
    ];
    dispatch({
        type: FETCH_BOARDS,
        payload: boards
    });
};

export const createBoard = (board) => dispatch => {
    board.id = new Date().getTime();
    dispatch({
        type: NEW_BOARD,
        payload: board
    });
};

export const deleteBoard = (boardId) => dispatch => {
    dispatch({
        type: DELETE_BOARD,
        payload: boardId
    });
};
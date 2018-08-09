export const fetchCards = (boardId) => dispatch => {
    const cards = [
        {id:1, title: 'Card 1', body: 'Card one body', boardId: 1},
        {id:2, title: 'Card 2', body: 'Card two body', boardId: 2},
        {id:1, title: 'Card 1', body: 'Card one body', boardId: 2},
        {id:2, title: 'Card 2', body: 'Card two body', boardId: 1}
    ];
    dispatch({
        type: 'FETCH_CARDS',
        payload: cards
    });
};

export const createCard = (card) => dispatch => {
    card.id = new Date().getTime();
    dispatch({
        type: 'NEW_CARD',
        payload: card
    });
};
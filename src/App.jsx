import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Boards from './Boards'

const middleware = [thunk];
const initialState = {
    newBoard: {},
    boards: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_BOARD':
            return {
                ...state,
                newBoard: action.payload,
            };

        case 'FETCH_BOARDS':
            return {
                ...state,
                boards: action.payload,
            };

        case 'NEW_CARD':
            return {
                ...state,
                newCard: action.payload
            };

        case 'FETCH_CARDS':
            return {
                ...state,
                cards: action.payload
            };
    }

    return state;
};

const store = createStore(
    reducer,
    {},
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

class App extends Component {
  render() {
     return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Trello :)</h1>
                    <Boards />
                </header>
            </div>
        </Provider>
     );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(
    function todosReducer(state = { boards: [] }, action) { return state; },
    {state: 'initialState'},
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
                </header>
            </div>
        </Provider>
     );
  }
}

export default App;

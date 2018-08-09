import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Boards from './components/Boards';
import store from './store';

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

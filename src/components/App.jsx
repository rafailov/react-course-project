import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import BoardsView from "../views/BoardsView";
import CardView from "../views/CardView";

class App extends Component {
  render() {
     return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Trello :)</h1>
                </header>

                <React.Fragment>
                    <Switch>
                        <Route path="/" component={BoardsView} exact />
                        <Route path="/card/:id" component={CardView} />
                        <Redirect to="/" />
                    </Switch>
                </React.Fragment>
            </div>
        </Provider>
     );
  }
}

export default App;

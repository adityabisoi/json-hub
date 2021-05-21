import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import routes from '../src/routing/routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <BrowserRouter>
    <Provider store={store}>
      <div className="App">
        <div>
          <Switch>
            <Route path="/routes" component={routes} />
          </Switch>
        </div>
      </div>
    </Provider> 
    </BrowserRouter> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

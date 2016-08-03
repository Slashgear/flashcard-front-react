import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import DeckListContainer from './app/containers/DeckListContainer.js';
import DeckFormContainer from "./app/containers/DeckFormContainer";
import flashcardApp from './app/reducers';
import thunk from 'redux-thunk';
import 'toastr/toastr.scss';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

const isBrowser = typeof window !== 'undefined';
const initialState = isBrowser ? window.__INITIAL_STATE__ : undefined;
const devToolsExtension = isBrowser && window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(flashcardApp,initialState, compose(
  applyMiddleware(thunk),
  devToolsExtension
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={DeckListContainer}/>
        <Route path="/deckCreate" component={DeckFormContainer} action="CREATE"/>
        <Route path="/deck" component={DeckFormContainer} action="UPDATE">
          <Route path="/deck/:deckId" component={DeckFormContainer}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

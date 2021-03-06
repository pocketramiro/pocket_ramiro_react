import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/index';
import { loadState, saveState } from './Utility/localStorage'; 

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
  saveState(store.getState())
})

const router = (
  <Provider store={store}>
    <BrowserRouter> 
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

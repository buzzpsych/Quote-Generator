import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';
import QuoteContainer from './containers/quoteContainer';
import Pdf from './containers/pdf';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from './store/reducers/index'
import {createLogger} from "redux-logger"
import ReduxThunk from 'redux-thunk'

const middleware = applyMiddleware(ReduxThunk,createLogger())
const store = createStore(reducers, middleware);

//STORE LOGGER
store.subscribe(() => {
  console.log("Store state: ", store.getState())
})
console.log(store);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
         <Route exact path='/' component={QuoteContainer}/>
        <Route path='/pdf/:path' component={Pdf}/>
      
    </div>
    </Router>
    </Provider>
  ,
  document.getElementById('root')
);

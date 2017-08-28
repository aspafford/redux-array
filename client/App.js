import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced';
import SliderCollection from './component/SliderCollection'

/* https://github.com/zalmoxisus/redux-devtools-extension */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(createDebounce(), thunk)
));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SliderCollection/>
      </Provider>
    )
  }
}
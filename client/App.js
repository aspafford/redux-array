import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import CounterCollection from './component/CounterCollection'

let store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterCollection/>
      </Provider>
    )
  }
}
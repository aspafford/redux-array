import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Counter from './Counter'
import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { counterAction } from '../store/counterReducer'

const mapStateToProps = state => ({
  counters: state
})


const counterDispatchProperties =
  index =>
    dispatch => bindActionCreators(
        bindIndexToActionCreators({counterAction}, index),
      dispatch)

const CounterCollection = props =>
  <div className='container'>
    {props.counters.map((value, index) =>
      <Counter counter={value}
        {...counterDispatchProperties(index)(props.dispatch)}/>
    )}
  </div>

export default connect(mapStateToProps)(CounterCollection)
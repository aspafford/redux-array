import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Slider from './Slider'
import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { sliderAction } from '../store/sliderReducer'

const mapStateToProps = state => ({
  sliders: state
})


const sliderDispatchProperties =
  index =>
    dispatch => bindActionCreators(
        bindIndexToActionCreators({sliderAction}, index),
      dispatch)

const SliderCollection = props =>
  <div className='container'>
    {props.sliders.map((value, index) =>
      <Slider slider={value}
        {...sliderDispatchProperties(index)(props.dispatch)}/>
    )}
  </div>

export default connect(mapStateToProps)(SliderCollection)
import React from 'react'
import { connect } from 'react-redux'
import Slider from './Slider'
import { sliderAction } from '../store/sliderReducer'

const mapStateToProps = state => ({
  sliders: state
})

const mapDispatchProperties =
  index => 
    dispatch => {
      return {
        sliderAction: event => {
          dispatch(sliderAction(event, index));
        }
      }
    }

const SliderCollection = props =>
  <div className='container'>
    {props.sliders.map((value, index) =>
      <Slider key={index} slider={value}
        {...mapDispatchProperties(index)(props.dispatch)}/>
    )}
  </div>

export default connect(mapStateToProps)(SliderCollection)
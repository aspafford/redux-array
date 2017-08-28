import React from 'react'

const Slider = props =>
   <div>
      <input
        type="range"
        name="freq"
        defaultValue={props.slider.value}
        onChange={props.sliderAction}
      />
      {props.slider.value}
    </div>

export default Slider
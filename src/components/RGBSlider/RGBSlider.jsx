import React from 'react';
import Range from '../Range/Range';

const RGBSlider = ({
  color,
  handleChange,
  onCancel,
  onSubmit
}) => {
  const { red, green, blue } = color;

  return (
    <form className='slider'>
      <div className='slider-ranges'>
        <Range value={red} onChange={handleChange} name='red' />
        <Range value={green} onChange={handleChange} name='green' />
        <Range value={blue} onChange={handleChange} name='blue' />
      </div>
      <div className='slider-buttons'>
        <button className='slider-buttons__btn cancel' onClick={e => onCancel(e)}>
          Cancel
        </button>
        <button className='slider-buttons__btn submit' onClick={e => onSubmit(e)}>
          Ok
        </button>
      </div>
    </form>
  )
}

export default RGBSlider

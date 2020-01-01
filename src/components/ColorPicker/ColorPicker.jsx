import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import RGBDropdown from '../RGBSlider/RGBDropdown';

import { convertToRGB, convertToHex } from '../../utils/functions';

import './ColorPicker.sass';

const ColorPicker = ({ value, colors, onChange }) => {
  const [color, setColor] = useState(convertToRGB(value));
  const { red, green, blue } = color;
  const colorValue = convertToHex(red, green, blue) || value;

  useEffect(() => {
    setColor(convertToRGB(value))
  }, [value])

  const updateValue = selectedValue => {
    onChange(selectedValue)
  }

  const handleChange = event => {
    event.persist()
    setColor({ ...color, [event.target.name]: event.target.value })
  }

  const setInitialValue = () => {
    setColor(convertToRGB(value))
  }

  return (
    <div className='color-picker'>
      <input
        className='color-picker__value'
        type='text'
        readOnly
        value={colorValue}
      />
      <RGBDropdown
        color={color || value}
        onChange={onChange}
        handleChange={e => handleChange(e)}
        resetValue={setInitialValue}
      />
      <Dropdown list={colors} onChange={updateValue} />
    </div>
  )
}

export default ColorPicker

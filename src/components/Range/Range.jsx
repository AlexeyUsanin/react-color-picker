import React from 'react';

import './Range.sass';

const Range = ({ name, value, onChange }) => (
  <div className='range'>
    <label htmlFor={name}>{name}</label>
    <input
      value={value}
      type='range'
      min='0'
      max='255'
      name={name}
      onChange={onChange}
    />
  </div>
)

export default Range

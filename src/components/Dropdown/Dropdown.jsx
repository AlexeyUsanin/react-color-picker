import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';

import './Dropdown.sass';

const Dropdown = ({ list, onChange }) => {
  const dropdown = useRef();
  const [open, setOpen] = useState(false);

  const handleClick = e => {
    if (dropdown.current.contains(e.target)) {
      return
    }

    setOpen(false)
  }

  const handleChange = (selectedValue) => {
    onChange(selectedValue)
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className='dropdown' ref={dropdown}>
      <div className='dropdown-header' onClick={() => setOpen(!open)}>
        <div className={cx('dropdown-header__icon', { open })} />
      </div>
      {open && (
        <div className='dropdown-menu'>
          {list.map(({ name, color }) => (
            <div
              className='dropdown-menu__item'
              onClick={() => handleChange(color)}
              key={name}>
              <div className='text'>{name}</div>
              <div className='color' style={{ background: color }} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown

import React, { useState, useEffect, useRef, useCallback } from "react";

import RGBSlider from "./RGBSlider";

import { convertToHex } from "../../utils/functions";

const RGBDropdown = ({ color, onChange, handleChange, resetValue }) => {
  const dropdown = useRef();
  const [open, setOpen] = useState(false);
  const { red, green, blue } = color;

  const resetForm = useCallback(() => {
    resetValue();
    setOpen(false);
  }, [resetValue]);

  const handleClick = useCallback(
    e => {
      if (dropdown.current.contains(e.target)) {
        return;
      }

      resetForm();
      setOpen(false);
    },
    [resetForm]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  const handleSubmit = e => {
    e.preventDefault();
    onChange(convertToHex(red, green, blue));
    setOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdown}>
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <div
          className="dropdown-header__square"
          style={{ background: `rgb(${red}, ${green}, ${blue})` }}
        />
      </div>
      {open && (
        <div className="dropdown-menu">
          <RGBSlider
            onChange={onChange}
            color={color}
            handleChange={handleChange}
            onCancel={resetForm}
            onSubmit={e => handleSubmit(e)}
          />
        </div>
      )}
    </div>
  );
};

export default RGBDropdown;

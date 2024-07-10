
import React, { ChangeEvent, FC } from 'react';
import PropTypes from 'prop-types';
type InputProps = {
  id: string,
  name: string,
  type?: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void | undefined,
  required?: boolean,
}
const Input: FC<InputProps> = ({ id, name, type = 'text', value, onChange, required = false }) => {
  return (
    <div className="content_input">
      <label htmlFor={id}>{name}:</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default Input;

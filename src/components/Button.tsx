import React, { FC } from 'react';
import PropTypes from 'prop-types';

type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void | undefined,
  type?: 'button' | 'submit' | 'reset',
  className?: string
}

const Button: FC<ButtonProps> = ({ children, onClick, type = 'button', className }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({_ref})  => {
  var children = _ref.children,
      onClick = _ref.onClick;
  return React.createElement("button", {
    onClick: onClick,
    style: styles,
    type: "button"
  }, children);
};

Button.propTypes = {
  children: PropTypes.isRequired,
  onClick: PropTypes.func
};

export default Button;
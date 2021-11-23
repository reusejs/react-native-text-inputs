import React from 'react';
import BaseButton from '../Base/index.js';

const Button = props => {
  return (
    <BaseButton
      onPressColor="#2563EB"
      backgroundColor="#3B82F6"
      borderColor="#2563EB"
      {...props}>
      Blue Button
    </BaseButton>
  );
};

export default Button;

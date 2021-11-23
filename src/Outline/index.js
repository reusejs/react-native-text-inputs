import React from 'react';
import BaseButton from '../Base/index.js';

const Button = props => {
  return (
    <BaseButton
      onPressColor="#FAFAFA"
      backgroundColor="#FFF"
      borderColor="#18181B"
      textColor="#18181B"
      {...props}>
      Outline Button
    </BaseButton>
  );
};

export default Button;

import React, { useState } from 'react';
import { AlertStyled } from '../../styles/RecycleStyles';

const Alert = ({ text }) => {
  return (
    <AlertStyled>
      <p>{text}</p>
    </AlertStyled>
  );
};

export default Alert;

import React from 'react';
import { ButtonBase } from './styles';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {

  return(
    <ButtonBase onClick= {onClick}>{ children }</ButtonBase>
  )
}

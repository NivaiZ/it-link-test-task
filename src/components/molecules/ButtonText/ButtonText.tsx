// src/molecules/ButtonText.tsx
import React from 'react'
import Button from '../../atoms/Buttons/Button'
import Text from '../../atoms/Text/Text'

interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonText: React.FC<ButtonTextProps> = ({ children, ...props }) => (
  <Button {...props}>
    <Text>{children}</Text>
  </Button>
);

export default ButtonText;
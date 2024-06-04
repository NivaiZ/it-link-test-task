// src/atoms/Text.tsx
import React from 'react'

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Text: React.FC<TextProps> = ({ children, ...props }) => <span {...props}>{children}</span>;

export default Text;
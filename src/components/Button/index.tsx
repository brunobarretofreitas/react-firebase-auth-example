import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;

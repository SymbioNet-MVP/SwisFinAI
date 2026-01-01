import React from 'react';

export const Button = ({ children, asChild, ...props }: any) => {
  if (asChild && React.isValidElement(children)) return React.cloneElement(children as any, props);
  return <button {...props}>{children}</button>;
};

export default Button;

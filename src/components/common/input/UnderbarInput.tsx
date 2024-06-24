import React, { ReactNode } from "react";

interface UnderbarInputProps {
  className?: string;
  value?: string | number;
  children?: ReactNode;
}

export default function UnderbarInput({
  className,
  value,
  children,
  ...restProps
}: UnderbarInputProps) {
  const newClassName = `border-b border-gray-400 focus:border-blue-500 outline-none px-3 py-2 w-full ${className}`;

  return (
    <input type="text" className={newClassName} value={value} {...restProps}>
      {children}
    </input>
  );
}

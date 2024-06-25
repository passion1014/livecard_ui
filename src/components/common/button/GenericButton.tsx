import React, { ReactNode } from "react";
import { Button } from "src/components/shadcn/ui/button";

interface GenericButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export default function GenericButton({
  className,
  children,
  ...restProps
}: GenericButtonProps) {
  return (
    <Button variant="outline" className={className} {...restProps}>
      {children}
    </Button>
  );
}

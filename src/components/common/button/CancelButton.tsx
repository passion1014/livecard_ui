import React from "react";
import { Button } from "src/components/shadcn/ui/button";

interface CancelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function CancelButton({
  className,
  ...restProps
}: CancelButtonProps) {
  return (
    <Button variant="secondary" className={className} {...restProps}>
      취소
    </Button>
  );
}

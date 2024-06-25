import { Save } from "lucide-react";
import React from "react";
import { Button } from "src/components/shadcn/ui/button";

interface SaveButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function SaveButton({
  className,
  ...restProps
}: SaveButtonProps) {
  return (
    <Button className={className} {...restProps}>
      <Save className="mr-2 h-4 w-4" />
      저장
    </Button>
  );
}

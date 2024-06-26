import { Save } from "lucide-react";
import React from "react";
import { Button } from "src/components/shadcn/ui/button";

interface SaveButtonProps {
  className?: string;
}

export default function SaveButton({
  className,
  ...restProps
}: SaveButtonProps) {
  return (
    <Button className={className}>
      <Save className="mr-2 h-4 w-4" {...restProps} />
      저장
    </Button>
  );
}

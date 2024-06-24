import { Save } from "lucide-react";
import React from "react";
import { Button } from "src/components/shadcn/ui/button";

interface CancelButtonProps {
  className?: string;
}

export default function CancelButton({ className }: CancelButtonProps) {
  return (
    <Button variant="secondary" className={className}>
      취소
    </Button>
  );
}

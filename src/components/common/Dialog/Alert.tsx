import React from "react";
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogAction,
} from "src/components/shadcn/ui/alert-dialog";

interface AlertProps {
  title?: string | null;
  desc?: string | null;
  open: boolean;
  setOpen: (open: boolean) => void;
  onOk?: () => void;
  onCancel?: () => void;
  hasCancel?: boolean;
}

export default function Alert({
  title,
  desc,
  open,
  setOpen,
  onOk,
  onCancel,
  hasCancel,
}: AlertProps) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {hasCancel && (
            <AlertDialogCancel onClick={onCancel}>취소</AlertDialogCancel>
          )}
          <AlertDialogAction onClick={onOk}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

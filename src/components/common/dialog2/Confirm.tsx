import React from "react";
import Alert from "./Alert";

interface ConfirmProps {
  title?: string | null;
  desc?: string | null;
  open: boolean;
  setOpen: (open: boolean) => void;
  onOk?: () => void;
}
export default function Confirm({
  title,
  desc,
  open,
  setOpen,
  onOk,
}: ConfirmProps) {
  return (
    <Alert
      open={open}
      setOpen={setOpen}
      title={title}
      desc={desc}
      onOk={onOk}
      hasCancel={true}
    ></Alert>
  );
}

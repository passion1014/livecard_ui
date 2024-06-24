import { create } from "zustand";

interface AlertState {
  isOpen: boolean;
  title: string;
  desc: string;
  setOpen: (isOpen: boolean) => void;
  showAlert: (
    title: string,
    desc: string,
    onOk?: () => void | null,
    onCancel?: () => void
  ) => void;
  showAlertSync: (title: string, desc: string) => Promise<boolean>;
  onCancel?: () => void | null;
  onOk?: () => void | null;
  hideAlert?: () => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  isOpen: false,
  title: "",
  desc: "",
  onCancel: undefined,
  onOk: undefined,
  setOpen: (isOpen: boolean) => {
    set({ isOpen });
  },
  showAlert: (
    title: string,
    desc: string,
    onOk?: () => void | null,
    onCancel?: () => void
  ) =>
    set({
      isOpen: true,
      title: title,
      desc: desc,
      onCancel: onCancel,
      onOk: onOk,
    }),
  showAlertSync: (title: string, desc: string) =>
    new Promise<boolean>((resolve) => {
      set({
        isOpen: true,
        title,
        desc,
        onCancel: () => resolve(false),
        onOk: () => resolve(true),
      });
    }),
  hideAlert: () => set({ isOpen: false }),
}));

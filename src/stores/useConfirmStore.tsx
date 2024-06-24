import { create } from "zustand";

interface ConfirmState {
  isOpen: boolean;
  title: string;
  desc: string;
  setOpen: (isOpen: boolean) => void;
  showConfirm: (title: string, desc: string, onOk?: () => void | null) => void;
  showConfirmSync: (title: string, desc: string) => Promise<boolean>;
  onOk?: () => void | null;
  hideConfirm?: () => void;
}

export const useConfirmStore = create<ConfirmState>((set) => ({
  isOpen: false,
  title: "",
  desc: "",
  onOk: undefined,
  setOpen: (isOpen: boolean) => {
    set({ isOpen });
  },
  showConfirm: (title: string, desc: string, onOk?: () => void | null) =>
    set({
      isOpen: true,
      title: title,
      desc: desc,
      onOk: onOk,
    }),
  showConfirmSync: (title: string, desc: string) =>
    new Promise<boolean>((resolve) => {
      set({
        isOpen: true,
        title,
        desc,
        onOk: () => resolve(true),
      });
    }),
  hideConfirm: () => set({ isOpen: false }),
}));

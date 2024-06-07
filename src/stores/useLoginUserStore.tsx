import { create } from "zustand";

export interface MbrUser {
  id: number;
  userNo: string;
  email: string;
  name: string;
  profileImgPath: string;
  profileImgNm: string;
  profileImgExt: string;
}

export interface MbrUserStore {
  user: MbrUser | null;
  setLoginUser: (user: MbrUser) => void;
  clearLoginUser: () => void;
}

/**
 * 로그인 후의 사용자 정보 store
 */
const useLoginUserStore = create<MbrUserStore>((set) => ({
  user: null,
  setLoginUser: (user: MbrUser) => set({ user }),
  clearLoginUser: () => set({ user: null }),
}));

export default useLoginUserStore;

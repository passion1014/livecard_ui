import { create } from "zustand";

export interface MbrUser {
  id: number;
  socialId: string;
  name: string;
  providerCd: string;
  role: string;
  profileImg: string;
}

export interface MbrUserStore {
  loginUser: MbrUser | null;
  setLoginUser: (user: MbrUser) => void;
  clearLoginUser: () => void;
}

/**
 * 로그인 후의 사용자 정보 store
 */
const useLoginUserStore = create<MbrUserStore>((set) => ({
  loginUser: null,
  setLoginUser: (loginUser: MbrUser) => {
    set({ loginUser });

    console.log(loginUser); // 업데이트된 값 사용
  },
  clearLoginUser: () => set({ loginUser: null }),
}));

export default useLoginUserStore;

import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthoRoute from "./routes/AuthRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";
import Header from "./components/common/layout/Header";
import LoginCallbackPage from "./pages/LoginCallbackPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import { getLocalItem } from "./util/storage";
import useLoginUserStore from "./stores/useLoginUserStore";

import CardPreviewPage from "./pages/CardPreviewPage";
import CardCreatePage from "./pages/CardCreatePage";
import User from "./constants/User";

const App = () => {
  const { setLoginUser } = useLoginUserStore();

  useEffect(() => {
    const loginUser: string = getLocalItem(User.LOGIN_USER);
    if (loginUser) {
      setLoginUser(JSON.parse(loginUser)); //로그인 정보 store에 저장
    }
  }, []);

  return (
    <Routes>
      {/* 인증없이 접근가능한 페이지 */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/loginCallback" element={<LoginCallbackPage />} />
      <Route path="/*" element={<PageNotFoundPage />} />
      {/* <Route path="/signup" element={<SignupPage />} /> */}
      {/* 인증 필요 페이지 */}
      <Route element={<AuthoRoute />}>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/card/create" element={<CardCreatePage />} />
        <Route path="/card/preview" element={<CardPreviewPage />} />
      </Route>
    </Routes>
  );
};
export default App;

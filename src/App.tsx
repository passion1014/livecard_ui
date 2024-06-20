import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthoRoute from "./routes/AuthRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import LoginCallbackPage from "./pages/LoginCallbackPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";

import CardPreviewPage from "./pages/CardPreviewPage";
import CardCreatePage from "./pages/CardCreatePage";

const App = () => {
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

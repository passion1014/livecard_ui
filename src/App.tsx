import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthoRoute from "./routes/AuthRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import Header from "./components/common/layout/Header";
import LoginCallbackPage from "./pages/LoginCallbackPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import CardCreatePage from "./pages/CardCreatePage";
import CardPreviewPage from "./pages/CardPreviewPage";
import TypeSelectPage from "./pages/TypeSelectPage";
import MediaCreatePage from "./pages/MediaCreatePage";
import CardListPage from "./pages/CardListPage";
import MyPageContentsPage from "./pages/MyPageContentsPage";

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex h-screen w-full flex-col">
      {pathname === "/login" ? null : <Header />}
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
          <Route path="/mypageContents" element={<MyPageContentsPage />} />
          <Route path="/card/create" element={<CardCreatePage />} />
          <Route path="/card/preview" element={<CardPreviewPage />} />
          <Route path="/card/typeSelect" element={<TypeSelectPage />} />
          <Route path="/card/mediaCreate" element={<MediaCreatePage />} />
          <Route path="/card/cardList" element={<CardListPage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;

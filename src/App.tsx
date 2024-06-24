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
import Alert from "./components/common/dialog/Alert";
import { useAlertStore } from "./stores/useAlertStore";
import TestPage from "./pages/TestPage";
import Confirm from "./components/common/dialog/Confirm";
import { useConfirmStore } from "./stores/useConfirmStore";

const App = () => {
  const { pathname } = useLocation();
  const alert = useAlertStore();
  const confirm = useConfirmStore();

  return (
    <div className="flex h-screen w-full flex-col">
      <Alert
        open={alert.isOpen}
        setOpen={alert.setOpen}
        title={alert.title}
        desc={alert.desc}
        onCancel={alert.onCancel}
        onOk={alert.onOk}
      />
      <Confirm
        open={confirm.isOpen}
        setOpen={confirm.setOpen}
        title={confirm.title}
        desc={confirm.desc}
        onOk={confirm.onOk}
      />

      {pathname === "/login" ? null : <Header />}
      <Routes>
        {/* 인증없이 접근가능한 페이지 */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />} />
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
    </div>
  );
};
export default App;

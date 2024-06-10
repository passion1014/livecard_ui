import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthoRoute from "./routes/AuthRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MyPage from "./pages/MyPage";
import Header from "./components/common/Header";

const App = () => {
  //const { pathname } = useLocation();

  return (

    <Routes>
      {/* 인증없이 접근가능한 페이지 */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/signup" element={<SignupPage />} /> */}
      {/* 인증 필요 페이지 */}
      <Route element={<AuthoRoute />}>
        <div className="flex h-screen w-full flex-col">
          <Header />
          <div className="flex flex-1">
            <div className="hidden h-full bg-gray-100 p-4 lg:block">
              <Route path="/mypage" element={<MyPage />} />
            </div>
          </div>
        </div>
      </Route>
    </Routes>
  )
};
export default App;

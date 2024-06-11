import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import useLoginUserStore from "../stores/useLoginUserStore";
import React from "react";
import Header from "src/components/common/layout/Header";
import SideBar from "src/components/common/layout/SideBar";

const AuthoRoute = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { user } = useLoginUserStore();

  // useEffect(() => {
  //   if (!user) {
  //     alert('로그인 후 이용해주세요');
  //     navigate('/login', { state: pathname });
  //   }
  // }, [navigate, pathname, user]);

  return (
    <div className="flex h-screen w-full flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 bg-gray-50 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthoRoute;

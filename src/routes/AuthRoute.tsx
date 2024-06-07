import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import useLoginUserStore from "../stores/useLoginUserStore";
import React from "react";

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

  return <Outlet />;
};

export default AuthoRoute;

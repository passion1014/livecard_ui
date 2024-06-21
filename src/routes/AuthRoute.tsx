import { useEffect } from "react";
import { useNavigate, useLocation, Outlet, Link } from "react-router-dom";
import useLoginUserStore from "../stores/useLoginUserStore";
import React from "react";
import Header from "src/components/common/layout/Header";
import SideBar from "src/components/common/layout/SideBar";
import { MoveLeft } from "lucide-react";

const AuthoRoute = () => {
  // useEffect(() => {
  //   if (!user) {
  //     alert('로그인 후 이용해주세요');
  //     navigate('/login', { state: pathname });
  //   }
  // }, [navigate, pathname, user]);

  return (
    <div className="flex flex-1">
      <SideBar />
      <div className="flex-1 bg-gray-50 p-6">
        <div className="w-full bg-white py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <MoveLeft className="w-6 h-6" />
              </Link>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                My Page
              </h2>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthoRoute;

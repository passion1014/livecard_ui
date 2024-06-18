import { Progress } from "src/components/shadcn/ui/progress";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "src/api/api";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "src/components/shadcn/ui/card";
import { setLocalItem } from "src/util/storage";
import useLoginUserStore from "src/stores/useLoginUserStore";
import { userApi } from "src/api/userApi";

/**
 *  oauth 로그인후 리다이렉션처리 페이지
 */
const LoginCallbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoginUser } = useLoginUserStore();

  useEffect(() => {
    const fetchData = async () => {
      //====================
      // acess-token 가져오기
      //====================
      const params = new URLSearchParams(location.search);
      const token = params.get("token");
      setLocalItem("access_token", token);

      //====================
      // 사용자 정보 불러오기
      //====================
      const response = await userApi.getLoginUser();
      const data = response.data;
      setLoginUser(data.data); //로그인 정보 store에 저장

      navigate("/");
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">Redirecting...</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            {/* You are being redirected to the authentication provider. Please wait
            while we process your request. */}
            로그인 처리중입니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-6 py-8">
          <Progress value={50} className="w-full" />
          <div />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginCallbackPage;

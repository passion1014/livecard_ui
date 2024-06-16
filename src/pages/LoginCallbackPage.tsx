import { Progress } from "src/components/shadcn/ui/progress";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "src/api/api";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "src/components/shadcn/ui/card";
import { GOOGLE, KAKAO, NAVER } from "src/constants/OauthProvider";
/**
 *  oauth 로그인후 리다이렉션처리 페이지
 */
const LoginCallbackPage = () => {
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      // const parsedHash = new URLSearchParams(window.location.hash.substring(1));
      // const code: string | null = parsedHash.get("code");
      const url = new URL(window.location.href);
      const searchParam = new URLSearchParams(url.search);
      const code = searchParam.get('code');

      //alert(code);
      if (code == null) {
        //TODO:
      }

      const searchParams = new URLSearchParams(location.search);
      const oauthProvider = searchParams.get("provider");

      let acessCodeUrl: string = "";
      if (oauthProvider === KAKAO) {
        acessCodeUrl = 'http://localhost:8080/api/auth/kakao/accesstoken';
      } else if (oauthProvider === NAVER) {
        acessCodeUrl = 'http://localhost:8080/api/auth/naver/accesstoken';
      } else if (oauthProvider === GOOGLE) {
        acessCodeUrl = 'http://localhost:8080/api/auth/google/accesstoken';
      }

      api.get(acessCodeUrl, {
        //api.get('/api/auth/kakao/accesstoken', { //TODO: Proxy설정 확인
        params: {
          code: code
        }
      })
        .then(response => {
          //debugger;
          console.log('Successfully received access token', response.data);
        })
        .catch(error => {
          console.error('Error receiving access token', error);
        });

      // const { data } = await api.post("oauth/google", { accessToken });
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

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components/shadcn/ui/button";
import Token from "src/constants/Token";
import User from "src/constants/User";
import useLoginUserStore from "src/stores/useLoginUserStore";
import { removeLocalItem } from "src/util/storage";

/**
 *  랜딩 페이지
 */
const LandingPage = () => {
  const { loginUser, clearLoginUser } = useLoginUserStore();
  const navigate = useNavigate();
  const [providerNm, setProviderNm] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (loginUser?.providerCd === "0") setProviderNm("KAKAO");
    else if (loginUser?.providerCd === "1") setProviderNm("NAVER");
    else if (loginUser?.providerCd === "2") setProviderNm("GOOGLE");
  }, [navigate]);

  if (!loginUser) {
    navigate("/login");
  }

  return (
    <div>
      <div># 랜딩 페이지#</div>
      <div>...</div>
      <div>
        {loginUser?.name} {providerNm} 로그인
        <Button
          variant="destructive"
          onClick={() => {
            removeLocalItem(Token.ACCESS_TOKEN);
            removeLocalItem(User.LOGIN_USER);
            clearLoginUser();
            navigate("/login");

            // if (loginUser?.providerCd === Provider.KAKAO) {
            //   window.location.href = "https://kauth.kakao.com/oauth/logout";
            // } else if (loginUser?.providerCd === Provider.NAVER) {
            //   window.location.href = "https://nid.naver.com/nidlogin.logout";
            // } else if (loginUser?.providerCd === Provider.GOOGLE) {
            //   window.location.href = "https://www.google.com/accounts/Logout";
            // }
          }}
        >
          {loginUser ? "로그아웃" : "로그인"}
        </Button>
        <div>{loginUser ? <img src={loginUser?.profileImg} alt="" /> : ""}</div>
      </div>

      <div>
        <Button
          variant="outline"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인 페이지
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            navigate("/mypage");
          }}
        >
          마이페이지
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            navigate("/card/create");
          }}
        >
          카드 만들기
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;

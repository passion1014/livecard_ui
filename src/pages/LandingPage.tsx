import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components/shadcn/ui/button";
import useLoginUserStore from "src/stores/useLoginUserStore";

/**
 *  랜딩 페이지
 */
const LandingPage = () => {
  const { loginUser } = useLoginUserStore();
  const navigate = useNavigate();

  console.log(loginUser); // 업데이트된 값 사용

  return (
    <div>
      <div># 랜딩 페이지#</div>
      <div>...</div>
      <div>
        {loginUser ? `${loginUser.name} 로그인` : <div>로그인 안됨</div>}
        <div>{loginUser ? <img src={loginUser?.profileImg} alt="" /> : ""}</div>
      </div>

      <div>
        <Button
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인 페이지
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            navigate("/mypage");
          }}
        >
          마이페이지
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;

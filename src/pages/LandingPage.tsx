import React, { useEffect } from "react";
import useLoginUserStore from "src/stores/useLoginUserStore";

/**
 *  랜딩 페이지
 */
const LandingPage = () => {
  const { loginUser } = useLoginUserStore();

  console.log(loginUser); // 업데이트된 값 사용

  return (
    <div>
      <div>랜딩 페이지</div>
      <div>
        {loginUser ? `${loginUser.name} 로그인` : <div>로그인 안됨</div>}
        <div>{loginUser ? <img src={loginUser?.profileImg} alt="" /> : ""}</div>
      </div>
    </div>
  );
};

export default LandingPage;

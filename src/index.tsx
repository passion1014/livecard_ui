import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import useLoginUserStore from "src/stores/useLoginUserStore";
import "./index.css"; //tailwind css
import App from "./App";

import { getLocalItem } from "./util/storage";
import User from "./constants/User";

const Root = () => {
  console.log("index() 시작");

  const { setLoginUser, loginUser } = useLoginUserStore();
  if (!loginUser) {
    setLoginUser(JSON.parse(getLocalItem(User.LOGIN_USER))); //로그인 정보 store에 저장
  }

  return <App />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <HelmetProvider>
      <Root />
    </HelmetProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

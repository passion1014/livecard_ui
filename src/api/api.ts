import axios from "axios";
import {
  getLocalItem,
  getSessionItem,
  removeLocalItem,
  setLocalItem,
} from "src/util/storage";
import { tokenApis } from "./tokenApi";
import Token from "src/constants/Token";
import { getCookie, removeCookie } from "src/util/cookie";
import User from "src/constants/User";
import useLoginUserStore from "src/stores/useLoginUserStore";
import { useAlertStore } from "src/stores/useAlertStore";

const api = axios.create({
  baseURL: "http://localhost:8080/", //TODO:로컬에서만 되게끔
  //timeout: 8000,
  headers: {
    "Content-Type": `application/json`,
  },
});

//api.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
api.defaults.withCredentials = true;

/** 1. 요청 전 - access토큰있는데 만료되면 refresh토큰도 헤더담아서 요청보내기 */

// api.interceptors.request.use(
//   (config) => {
//     if (config.url === "/auth/login") {
//       return config;
//     }
//   }

// );

/**
 * HTTP Request 전처리
 */
api.interceptors.request.use((config) => {
  const accessToken = getLocalItem(Token.ACCESS_TOKEN);
  //TODO: accessToken이 없으면?
  //config.headers.common["Authorization"] = access_token;
  config.headers!.Authorization = `Bearer ${accessToken}`;

  return config;
});

/**
 * HTTP Response 전처리
 */
api.interceptors.response.use(
  async (response) => {
    const code = response.data?.code;
    // const message = response.data?.data;

    // if (code.startsWith('SYSERR')) {
    //   //시스템 오류
    //   alert(message);
    //   return Promise.reject();
    // }

    // if (response.headers.authorization) {
    //   const newAccessToken = response?.headers?.authorization;
    //   if (newAccessToken == null) {
    //     alert(`처리 중 오류가 발생했습니다: 사용자정보 없음`);
    //     return Promise.reject();
    //   }

    // localStorage.removeItem('access_token'); // 만료된 access토큰 삭제
    // localStorage.setItem('access_token', newAccessToken); // 새걸로 교체

    // response.config.headers.Authorization = `${newAccessToken}`;

    // response.config.headers = {
    //   ...response.config.headers,
    //   Authorization: `${newAccessToken}`,
    // };
    //}

    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 무한루프 방지

      try {
        const refreshToken = getCookie(Token.REFRESH_TOKEN);
        if (refreshToken == null) {
          console.error("No Refresh Token.");
          clearLogin();
        }

        //TODO: token expired 구분하기 위해서 서버에서 메시지 처리하기
        //unauthorised.
        const response = await api.post("/api/auth/token", refreshToken);
        const accessToken = response.data;
        if (accessToken) {
          setLocalItem(Token.ACCESS_TOKEN, accessToken);
        } else {
          //TODO: 에러 보여주기
          return Promise.reject(error);
        }

        return api(error.config);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        clearLogin();
        //return Promise.reject(refreshError);
      }
    } else {
      const { showAlert } = useAlertStore.getState();
      showAlert("오류", error.message);

      //TODO: Alert 띄우기
    }
  }
);

export default api;

const clearLogin = () => {
  removeLocalItem(Token.ACCESS_TOKEN);
  removeLocalItem(User.LOGIN_USER);

  const { clearLoginUser } = useLoginUserStore.getState();
  clearLoginUser();
  removeCookie(Token.REFRESH_TOKEN);

  window.location.href = "/login";
};

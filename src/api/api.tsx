import axios from "axios";
import { getSessionItem } from "src/util/storage";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  //timeout: 8000,
  headers: {
    "Content-Type": `application/json`,
  },
});

//api.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
api.defaults.withCredentials = true;

/** 1. 요청 전 - access토큰있는데 만료되면 refresh토큰도 헤더담아서 요청보내기 */
api.interceptors.request
  .use
  // (config) => {
  //   if (config.url === "/auth/login") {
  //     return config;
  //   }

  //   const accessToken = getSessionItem("access_token");
  //   const refreshToken = getSessionItem("refresh_token");
  //   if (accessToken) {
  //     /** 2. access토큰 있으면 만료됐는지 체크 */
  //     if (isJwtTokenExpired(accessToken)) {
  //       /** 3. 만료되면 만료된 access, refresh 같이 헤더 담아서 요청 */
  //       config.headers!.Authorization = `Bearer ${accessToken}`;
  //       config.headers!.Refresh = `Bearer ${refreshToken}`;
  //     } else {
  //       config.headers!.Authorization = `Bearer ${accessToken}`;
  //     }
  //   }
  //   return config;
  // },
  // (error) => Promise.reject(error)
  ();

/** 4. 응답 전 - 새 access토큰받으면 갈아끼기 */
api.interceptors.response
  .use
  // async (response) => {
  // const code = response.data?.code;
  // const message = response.data?.message;

  // if (code.startsWith("SYSERR")) {
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
  // }
  //   return response;
  // },
  // (error) => {
  //   //응답 200 아닌 경우 - 디버깅
  //   return Promise.reject(error);
  // }
  ();

/**
 * 토큰 만료 여부
 * @param accessToken
 * @returns
 */
const isJwtTokenExpired = (accessToken: string) => {
  if (!accessToken) {
    return null; // 토큰이 없으면 null 반환
  }

  const base64Payload = accessToken.split(".")[1]; // JWT에서 페이로드 부분 추출
  const payload = JSON.parse(atob(base64Payload)); // base64 디코딩

  const exp = payload.exp; // 페이로드에서 exp(만료시간) 값 추출
  const currentTime = Math.floor(Date.now() / 1000); // 현재 Unix 시간 (초 단위)

  if (exp < currentTime) {
    return true; // 토큰이 만료
  } else {
    return false;
  }
};

export default api;

import axios from "axios";
import { getLocalItem, getSessionItem, setLocalItem } from "src/util/storage";
import { tokenApis } from "./tokenApi";
import Token from "src/constants/Token";
import { getCookie } from "src/util/cookie";

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
    if (error.response.status === 401) {
      //TODO: token expired 구분하기 위해서 서버에서 메시지 처리하기
      //unauthorised.
      const response = await api.post(
        "/api/token",
        getCookie(Token.REFRESH_TOKEN)
      );
      const accessToken = response.data;
      if (accessToken) {
        setLocalItem(Token.ACCESS_TOKEN, accessToken);
      } else {
        //TODO: 에러 보여주기
      }

      return axios(error.config);
    }

    return Promise.reject(error);
  }
);

export default api;

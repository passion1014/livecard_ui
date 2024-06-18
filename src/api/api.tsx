import axios from "axios";
import { getLocalItem, getSessionItem, setLocalItem } from "src/util/storage";
import { tokenApis } from "./tokenApi";

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

api.interceptors.request.use((config) => {
  const accessToken = getLocalItem("access_token");
  //TODO: accessToken이 없으면?
  //config.headers.common["Authorization"] = access_token;
  config.headers!.Authorization = `Bearer ${accessToken}`;

  return config;
});

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
    //응답 200 아닌 경우 - 디버깅

    // const refreshToken = getCookie('refresh_token');
    // if (refreshToken == null) return Promise.reject(); //TODO
    // const result = await tokenApis.getAccessToken(refreshToken);

    //setLocalItem('access_token', result.accessToken));

    return Promise.reject(error);
  }
);

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
//  ();

/** 4. 응답 전 - 새 access토큰받으면 갈아끼기 */
// api.interceptors.response
//   .use
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
//();

const getCookie = (key: string) => {
  var result = null;
  var cookie = document.cookie.split(";");
  cookie.some(function (item) {
    item = item.replace(" ", "");

    var dic = item.split("=");

    if (key === dic[0]) {
      result = dic[1];
      return true;
    }
  });

  return result;
};

export default api;

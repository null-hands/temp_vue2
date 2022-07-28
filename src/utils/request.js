import axios from "axios";
import router from "../router";
// import store from '../store/index'

const Instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000 //设置请求超时
});

Instance.interceptors.request.use(
  config => {
    config.headers.Authorization = getToken(); //设置token
    config.headers.post["Content-Type"] = "application/x-www-form-urlencoded"; //post设置同一header
    return config;
  },
  error => Promise.reject(error)
);

Instance.interceptors.response.use(
  response =>
    response.status === 200 ? Promise.resolve(response.data) : Promise.reject(response.data),
  error => errorHandle(error)
);
export default Instance;

/**
 * 1. 获取token 根据设置的localStorage | vuex
 * @return {String}
 */
function getToken() {
  let TOKEN_KEY = "_TOKEN";
  return localStorage.getItem(TOKEN_KEY);
  // return store.state.token
}

/**
 * 2. 移除token 根据设置的localStorage | vuex
 */
function removeToken() {
  let TOKEN_KEY = "_TOKEN";
  return localStorage.removeItem(TOKEN_KEY);
  // return store.state.token
}

/**
 * 3. 跳转/login登录页面
 * 携带当前页面路由，登录之后回到当前页面
 */
function toLogin() {
  router.replace({
    path: "/login",
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

/**
 * 4. 错误处理函数
 * @param {Object} error
 */
function errorHandle(error) {
  let status = error.response.status;
  let errMsg = error.response.data.message || "错误信息未返回";
  switch (status) {
    case 401:
      toLogin();
      break; //未登录
    case 403:
      removeToken();
      break; //登录过期
    default:
      console.log(errMsg);
  }
}

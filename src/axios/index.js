import axios from "axios";

axios.defaults.baseURL = window.location.origin; // 配置axios请求的地址
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 10000;

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 在接收响应做些什么，例如跳转到登录页
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default axios

// import axios from "../../../axios";

export const STORE_USER_INFO = "STORE_USER_INFO";
export const BIND_USER_NAME = "BIND_USER_NAME";
export const BIND_PASSWORD = "BIND_PASSWORD";


// 绑定用户名输入框
export const bindUserName = (data) => {
    return {
        type: BIND_USER_NAME,
        data
    }
}

// 绑定密码
export const bindPassword = (data) => {
    return {
        type: BIND_PASSWORD,
        data
    }
}

// 存储获取的信息
export const storeUserInfo = (data) => {
    return{
        type: STORE_USER_INFO,
        data
    }
}


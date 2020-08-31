import { STORE_USER_INFO, BIND_USER_NAME, BIND_PASSWORD} from "./index";
import { fromJS } from "immutable";

const loginRegistered = fromJS({
  "userName": "", // 用户名
  "password": "", // 密码
  "loginStatus": false, // 登录状态
  "userInfoData": {
    "userId": "", // 用户id
    "userName": "", // 用户昵称
    "sex": 0, // 性别 0:女 1:男
    "age": 0, // 年龄
    "phone": 0 // 电话

  }
});



export default (state = loginRegistered, action) => {
  // 绑定用户名输入框
  if (action.type === BIND_USER_NAME) {
    return state.set("userName", fromJS(action.data));
  }

  // 绑定秘密输入框
  if (action.type === BIND_PASSWORD) {
    return state.set("password", fromJS(action.data));
  }

  // 登录
  if (action.type === STORE_USER_INFO) {
    
    return state.set("loginStatus", true).set("userInfoData", fromJS(action.data));
  }
  return state;
}
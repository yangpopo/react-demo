import React from 'react';
import { connect } from "react-redux";
import { storeUserInfo, bindUserName, bindPassword } from "./store/index";
import { useHistory } from "react-router-dom";

import "./index.scss"

const Login = (props) =>{
  let history = useHistory();
  const { userName, password, bindUserName, bindPassword, storeUserInfo } = props;
  const goLogIn = () => {
    storeUserInfo({
      "userId": "0000000", // 用户id
      "userName": "玛玛哈哈", // 用户昵称
      "sex": 0, // 性别 0:女 1:男
      "age": 123, // 年龄
      "phone": 13333333333 // 电话
    });
    alert("登录成功");
    history.go(-1);
  }
  return(
    <div className="login-box">
      <h1 className="title">登录</h1>
      <div className="input-box">
        <input type="text" placeholder="请输入用户名" value={ userName } onChange={ bindUserName }/>
        <input type="password" placeholder="请输入密码" value={ password } onChange= { bindPassword }/>
      </div>
      <div className="but-box">
        <button onClick={ goLogIn }>登录</button>
      </div>
    </div>
  )
}

// 链接redux数据
const mapStateToProps = (state) => {
  return {
    userName: state.get("UserInfoLoginStatus").get("userName"),
    password: state.get("UserInfoLoginStatus").get("password"),
    loginStatus: state.get("UserInfoLoginStatus").get("loginStatus"), // 登录状态
    userInfoData: state.get("UserInfoLoginStatus").get("userInfoData"), // 用户资料
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 绑定用户信息
    bindUserName(e) {
      dispatch(bindUserName(e.target.value));
    },

    // 绑定密码信息
    bindPassword(e) {
      dispatch(bindPassword(e.target.value));
    },

    // 存储用户信息
    storeUserInfo(data) {
      dispatch(storeUserInfo(data));
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
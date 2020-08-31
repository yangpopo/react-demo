import React, { Fragment, useState } from 'react';
import { connect } from "react-redux";
import './publish.scss';
import { Redirect } from "react-router-dom";
import { addArticleList } from "./store/index";
import { useHistory } from "react-router-dom";

const  Publish = (props) => {
  const { userName, addArticleList } = props;
  const [title, setTitle] = useState(""); // 标题
  const [abstract, setAbstract] = useState(""); // 内容
  // 生成随机数
  function randomNum(minNum,maxNum) { 
    switch(arguments.length){ 
      case 1: 
        return parseInt(Math.random()*minNum+1,10); 
      case 2: 
        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      default: 
        return 0; 
    } 
  } 
  // 提交文章
  let history = useHistory();
  const submitBut = () => {
    addArticleList({
      id: randomNum(20, 100),
      title: title,
      abstract: abstract,
      jsd: randomNum(50, 500),
      nickname: userName,
      comments: randomNum(10, 50),
      like: randomNum(100, 1000),
      nickId: "b96ce31a2b05",
      imgSrc: null
    }, history)
  }

  // 取消
  const  cancelBut = async () => {
    setTitle("");
    setAbstract("");
  }

  return (
    <Fragment>
      {
        userName !== "" ?
        <div className="publish-box">
          <div className="info-box">
            <span className="title">标题:</span><input type="text" value={ title } onChange={ (e) => { setTitle(e.target.value) } } />
          </div>
          <div className="info-box">
            <span className="title">作者:</span><input type="text" disabled defaultValue={ userName }/>
          </div>
          <textarea className="textarea-box" placeholder="请输入文章内容" value={ abstract } onChange={ (e) => { setAbstract(e.target.value) } }></textarea>
          <div className="but-box">
            <button className="cancel" onClick={ cancelBut }>取消</button><button className="submit" onClick={ submitBut }>提交</button>
          </div>
        </div>
        :
        <Redirect  to={{
          pathname: "/login",
        }} />
      }
    </Fragment>
    
  ) 
}


// 链接redux数据
const mapStateToProps = (state) => {
  return {
    userName: state.get("UserInfoLoginStatus").get("userName"),
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 添加文章列表
    addArticleList(data, history) {
      new Promise((resolve) => {
        let val = { data, resolve };
        dispatch(addArticleList(val));
      }).then((res) => {
        if (res) {
          history.push("/");
        }
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Publish);
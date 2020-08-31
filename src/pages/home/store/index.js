import axios from "../../../axios";

export const GET_ARTICLE_LIST = "GET_ARTICLE_LIST";
export const GET_AUTHOR_LIST = "GET_AUTHOR_LIST";
export const REPLACE_AUTHOR_LIST_PAGE = "REPLACE_AUTHOR_LIST_PAGE";
export const ADD_ARTICLE_LIST = "ADD_ARTICLE_LIST";

// 获取首页文章列表数据
export const getArticleList = () => {
  return (dispatch) => {
    axios.get("api/homeArticleList.json").then((res) => {
      if(res.success){
        dispatch({
          type: GET_ARTICLE_LIST,
          data: res.data
        });
      }
    }).catch((e) => {
      console.log("网络错误请稍后再试!");
    })
  }
}

// 获取作者列表
export const getAuthorList = () => {
  return (dispatch) => {
    axios.get("api/homeAuthorList.json").then((res) => {
      if(res.success){
        dispatch({
          type: GET_AUTHOR_LIST,
          data: res.data
        });
      }
    }).catch((e) => {
      console.log("网络错误请稍后再试!");
    })
  }
}

// 更新作者列表分页数据
export const replaceAuthorListPage = () => {
  return {
    type: REPLACE_AUTHOR_LIST_PAGE,
  }
}

// 添加文章
export const addArticleList = (val) => {
  return {
    type: ADD_ARTICLE_LIST,
    data: val.data,
    resolve: val.resolve
  }
}
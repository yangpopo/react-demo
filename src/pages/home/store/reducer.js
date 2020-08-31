import { GET_ARTICLE_LIST, GET_AUTHOR_LIST, REPLACE_AUTHOR_LIST_PAGE, ADD_ARTICLE_LIST } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
    "homeArticleList": [], // 首页文章列表
    "authorList": [], // 作者列表
    "authorListPage": { // 作者列表分页
        page: 1,
        pageSize: 5,
        total: 0
    }, 
});

export default (state = defaultState, action) => {
    // 首页文章列表
    if(action.type === GET_ARTICLE_LIST){
        const newHomeArticleList = [...state.get("homeArticleList").toJS(), ...action.data];
        return state.set("homeArticleList", fromJS(newHomeArticleList));
    }

    // 作者列表
    if(action.type === GET_AUTHOR_LIST){
        const newAuthorList = state.get("authorListPage").toJS();
        newAuthorList.total = Math.ceil(action.data.length / newAuthorList.pageSize);
        return state.set("authorListPage", fromJS(newAuthorList)).set("authorList", fromJS(action.data));
    }

    // 更新作者列表分页数据
    if(action.type === REPLACE_AUTHOR_LIST_PAGE){
        const newAuthorList = state.get("authorListPage").toJS();
        if(newAuthorList.page < newAuthorList.total){
            newAuthorList.page++;
            return state.set("authorListPage", fromJS(newAuthorList));
        }else{
            newAuthorList.page = 1;
            return state.set("authorListPage", fromJS(newAuthorList));
        }
    }

    // 添加文章
    if(action.type === ADD_ARTICLE_LIST){
        const newHomeArticleList = state.get("homeArticleList").toJS();
        newHomeArticleList.unshift(action.data);
        action.resolve(true);
        return state.set("homeArticleList", fromJS(newHomeArticleList));
    }

    return state;
}
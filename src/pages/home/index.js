import React, { PureComponent } from 'react';
import ArticleList from './compoinents/articleList';
import FastEntry from './compoinents/fastEntry';
import RecommendedAuthor from './compoinents/recommendedAuthor';
import AuthorUnit from './compoinents/authorUnit';
import { connect } from "react-redux";
import { getArticleList, getAuthorList, replaceAuthorListPage } from "./store/";
import './index.scss';

class Home extends PureComponent {
  constructor(props){
    super(props);
    this.props.getArticleList();
    this.props.getAuthorList();
    this.renderingAuthorList = this.renderingAuthorList.bind(this);
    this.switchAuthorList = this.switchAuthorList.bind(this);
  }
  render() {
    const { homeArticleList, getArticleList } = this.props;
    return (
      <div className="home-box">
        <div className="box-left">
          {
            homeArticleList.map((itme, index) => {
              itme = itme.toJS();
              return (<ArticleList key={ itme.title + index } articleData={ itme }></ArticleList>)
            })
          }
          <div className="load-more" onClick={ getArticleList }>阅读更多</div>
        </div>
        <div className="box-right">
          <FastEntry></FastEntry>
          <RecommendedAuthor switchAuthorList={ this.switchAuthorList }>
            { this.renderingAuthorList() }
          </RecommendedAuthor>
        </div>
      </div>
    )
  }

  // 渲染用户列表
  renderingAuthorList() {
    const { authorList, authorListPage } = this.props;
    if(authorList.size === 0) return;
    let newAuthorList = authorList.toJS();
    let newAuthorListPage = authorListPage.toJS();
    const authorArray = [];
    for(let i = 0; i < newAuthorListPage.pageSize; i++){
      let k = newAuthorListPage.page === 1 ? i : i + newAuthorListPage.pageSize * (newAuthorListPage.page - 1);
      authorArray.push(<AuthorUnit key={i} authorData={ newAuthorList[k] }></AuthorUnit>);
    }
    return authorArray;
  }

  // 换一换用户列表
  switchAuthorList() {
    this.props.replaceAuthorListPage();
  }
}

// 链接redux数据
const mapStateToProps = (state) => {
  return {
    homeArticleList: state.get("home").get("homeArticleList"),
    authorList: state.get("home").get("authorList"), // 作者数据
    authorListPage: state.get("home").get("authorListPage"), // 作者数据分页数据
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // 获取文章列表
    getArticleList() {
      dispatch(getArticleList());
    },

    // 获取作者列表
    getAuthorList(){
      dispatch(getAuthorList());
    },

    // 更新作者列表分页数据
    replaceAuthorListPage() {
      dispatch(replaceAuthorListPage());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);
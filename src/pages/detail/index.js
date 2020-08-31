import React from 'react';
import { connect } from "react-redux";
import { getDetailData } from "./store";
import { useParams } from "react-router-dom";
import './index.scss';

// 链接redux数据
const mapStateToProps = (state) => {
  return {
    detilData: state.get("detail").get("detilData"),
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDetailData(id){
      dispatch(getDetailData(id))
    }
  }
}


const Detail = (props) => {
  const { detilData, getDetailData } = props;
  const { id } = useParams();
  if(detilData.size === 0){
    getDetailData(id);
  }
  return (
    <div className="detail-box">
      <h1 className="title-box">{ detilData.get("title") }|文章id:{ id }</h1>
      <div className="meta">
        <span className="jsd-meta">
          <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2093"><path d="M352.17134 442.34393099L509.221212 991.80512399l157.060105-549.461193H352.17134z m33.128515-287.49583H204.368062L63.079152 384.86175199h230.196823l92.02388-230.013651z m277.91973 229.986021L571.186496 154.84810099H447.241602l-92.00239 230.013651 307.980373-0.02763z m-586.999134 57.541531L232.038262 640.09375999c0.375553-0.170892 202.846918 257.402441 202.846918 257.402442L291.769668 442.37565299H76.220451zM633.119033 154.84810099l92.034113 229.986021 232.863559 0.02763L814.065152 154.84810099H633.119033z m-46.115294 738.847541l270.741238-341.351411c-0.493234-0.25378 86.810135-109.969601 86.810135-109.969601H726.62773L587.003739 893.69564199z" p-id="2094"></path></svg>{ detilData.get("diamond") }
        </span>
        <a className="nick-name" href="/detail/0">{ detilData.get("nickname") }</a>
        <a className="nick-name" href="/detail/0">{ detilData.get("date") }</a>
        <a className="nick-name" href="/detail/0">字数 { detilData.get("wordCount") }</a>
        <a className="nick-name" href="/detail/0">阅读 { detilData.get("clickVolume") }</a>
      </div>
      <div className="content-box" dangerouslySetInnerHTML={{__html: detilData.get("content")}}></div>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps) (Detail);

import React from 'react';
import './articleList.scss';
import { Link } from 'react-router-dom';


function ArticleList(props) {
  const { id, title, abstract, jsd, nickname, comments, like, imgSrc } = props.articleData;
  return (
    <div className="article-list">
      <div className="description-box">
        <Link to={ "/detail/" + id } className="title">{ title }</Link>
        <p className="abstract">{ abstract }</p>
        <div className="meta">
          <span className="jsd-meta">
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2093"><path d="M352.17134 442.34393099L509.221212 991.80512399l157.060105-549.461193H352.17134z m33.128515-287.49583H204.368062L63.079152 384.86175199h230.196823l92.02388-230.013651z m277.91973 229.986021L571.186496 154.84810099H447.241602l-92.00239 230.013651 307.980373-0.02763z m-586.999134 57.541531L232.038262 640.09375999c0.375553-0.170892 202.846918 257.402441 202.846918 257.402442L291.769668 442.37565299H76.220451zM633.119033 154.84810099l92.034113 229.986021 232.863559 0.02763L814.065152 154.84810099H633.119033z m-46.115294 738.847541l270.741238-341.351411c-0.493234-0.25378 86.810135-109.969601 86.810135-109.969601H726.62773L587.003739 893.69564199z" p-id="2094"></path></svg>{ jsd }
          </span>
          <Link className="nick-name" to={ "/detail/" + id }>{ nickname }</Link>
          <Link className="news-meta" to={ "/detail/" + id }><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7174"><path d="M774.4 137H249.6c-62.2 0-112.4 50.4-112.4 112.4v375c0 62.2 50.4 112.4 112.4 112.4h37.4v112.4c0 29.2 31.8 47.2 56.8 32.2l241-144.6h189.6c62.2 0 112.4-50.4 112.4-112.4V249.4c0.2-62-50.2-112.4-112.4-112.4z" p-id="7175"></path></svg>{ comments }</Link>
          <span className="like-meta"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7471"><path d="M712.704 128A222.72 222.72 0 0 0 512 263.3728C461.2096 149.76 359.68 128 311.296 128 171.1616 128 76.8 236.8 76.8 357.6832 76.8 650.24 512 901.6832 512 901.6832s435.2-251.4432 435.2-544c0-120.8832-94.3104-229.6832-234.496-229.6832z" p-id="7472"></path></svg> { like }</span>
        </div>
      </div>
      {
        imgSrc == null ? '' : <Link to={ "/detail/" + id } className="wrap-img"><img src={ imgSrc } alt="" /></Link>
      }
    </div>
  )
}

export default ArticleList;
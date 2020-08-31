import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import "./recommendedAuthor.scss";

class RecommendedAuthor extends PureComponent {
  render() {
    return (
      <div className="recommended-author">
        <div className="title-box">
          <span className="title">推荐作者</span>
          <span className="but" onClick={ this.props.switchAuthorList }><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8126"><path d="M824.32 686.08c-5.12 0-15.36-5.12-20.48-5.12l-122.88-122.88c-10.24-10.24-10.24-25.6 0-35.84 10.24-10.24 25.6-10.24 35.84 0l107.52 107.52 107.52-107.52c10.24-10.24 25.6-10.24 35.84 0s10.24 25.6 0 35.84l-122.88 122.88c-10.24 0-15.36 5.12-20.48 5.12z m-501.76-128c-5.12 0-15.36-5.12-20.48-5.12l-102.4-107.52-107.52 107.52c-10.24 10.24-25.6 10.24-35.84 0-10.24-10.24-10.24-25.6 0-35.84l122.88-128c10.24-10.24 25.6-10.24 35.84 0l122.88 128c10.24 10.24 10.24 25.6 0 35.84 0 5.12-5.12 5.12-15.36 5.12z" p-id="8127"></path><path d="M486.4 870.4c-87.04 0-174.08-35.84-235.52-97.28-92.16-92.16-122.88-230.4-76.8-353.28 0-10.24 15.36-20.48 30.72-15.36 10.24 5.12 20.48 20.48 15.36 35.84-35.84 102.4-10.24 220.16 66.56 296.96 87.04 92.16 225.28 112.64 337.92 51.2 10.24-5.12 25.6 0 35.84 10.24 5.12 10.24 0 25.6-10.24 35.84-56.32 25.6-107.52 35.84-163.84 35.84z m343.04-204.8H819.2c-15.36-5.12-20.48-20.48-15.36-30.72 35.84-102.4 10.24-220.16-66.56-296.96-87.04-87.04-225.28-112.64-337.92-51.2-10.24 5.12-25.6 0-35.84-10.24 0-20.48 5.12-35.84 15.36-40.96 128-71.68 291.84-46.08 399.36 61.44 92.16 92.16 117.76 230.4 76.8 353.28-5.12 5.12-15.36 15.36-25.6 15.36z" p-id="8128"></path></svg>换一批</span>
        </div>
        { this.props.children }
        <Link to="/" className="more-but">查看更多></Link>
      </div>
    )
  }
}

export default RecommendedAuthor;
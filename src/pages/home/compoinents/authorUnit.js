import React from 'react';
import { Link } from 'react-router-dom';
import "./authorUnit.scss";

const AuthorUnit = (props) => {
  const { nickname, avatar_source, total_likes_count, total_wordage, is_following_user } = props.authorData;
  return (
    <div className="author-unit">
      <dl className="description">
        <dt className="avatar"><Link to="/"><img src={ avatar_source } alt="" /></Link></dt>
        <dd><Link to="/" className="name">{ nickname }</Link></dd>
        <dd className="influence">写了{ numeralFormat(total_wordage) }字 · { numeralFormat(total_likes_count) }喜欢</dd>
      </dl>
      {
        is_following_user === true ? <span className="but">取消关注</span> : <span className="but">+关注</span>
      }
    </div>
  )
}
const numeralFormat = (val) => {
  if(val <= 999) {
    return val;
  }else if(val > 999 && val <= 9999) {
    return (val / 1000).toFixed(2) + "k";
  }else {
    return (val / 10000).toFixed(2) + "w"
  }
   
}

export default AuthorUnit;
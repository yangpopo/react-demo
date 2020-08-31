import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import banner0 from '../../../assets/img/home/banner-0.png';
import banner1 from '../../../assets/img/home/banner-1.png';
import banner2 from '../../../assets/img/home/banner-2.png';
import banner3 from '../../../assets/img/home/banner-3.png';
import "./fastEntry.scss";

class FastEntry extends PureComponent  {
    render(){
        return (
            <div className="fast-entry">
                <Link to="/" className="link-box"><img src={ banner0 } alt="" /></Link>
                <Link to="/" className="link-box"><img src={ banner1 } alt="" /></Link>
                <Link to="/" className="link-box"><img src={ banner2 } alt="" /></Link>
                <Link to="/" className="link-box"><img src={ banner3 } alt="" /></Link>
            </div>
        )
    }
}

export default FastEntry;
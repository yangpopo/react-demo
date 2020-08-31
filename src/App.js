import React, { Fragment } from 'react';
import Header from './common/header/index';
import { HashRouter, Route } from "react-router-dom";
import {CacheSwitch, CacheRoute } from 'react-cache-router';	 //缓存路由
import Home from "./pages/home/index.js";
import Detail from "./pages/detail/loadable.js";
import Login from "./common/login/index";
import Publish from "./pages/home/publish.js";
import { connect } from "react-redux";

import ScrollToTop from "./ScrollToTop";


const App = (props) => {
  return (
    <Fragment>
        <HashRouter>
          <Header></Header>
          <CacheSwitch>
            <CacheRoute exact path="/">
              <Home></Home>
            </CacheRoute>
            <Route exact path="/detail/:id">
              <Detail />
              <ScrollToTop />
            </Route>
            <Route exact path="/publish">
              <Publish></Publish>
            </Route>
            <Route exact path="/haha" render={()=>{return(<div>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p>34534<p>阿斯顿发送到发</p><p>23452345</p><p>dfghdfg</p><p>5674657567</p><p>lkjkyljhkl</p><p>890789876</p></div>)}}></Route>
            <Route exact path="/login">
              <Login/>
            </Route>
          </CacheSwitch>
        </HashRouter>
      </Fragment>
  )
}

// 链接redux数据
const mapStateToProps = (state) => {
  return {
  }
}

// 链接处理方法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

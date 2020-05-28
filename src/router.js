//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件 
import homePage from './views/homePage/homePage';
//引入一些模块
import { BrowserRouter as Router, Route } from "react-router-dom";

function router() {
    return (
        <Router>
            <Route path="/" component={homePage} />
        </Router>);
}

export default router;
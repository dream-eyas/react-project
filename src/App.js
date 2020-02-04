import React from 'react';
import {Provider} from 'react-redux';
import {GlobalStyle} from './style';
import {GlobalStyleIcon} from './statics/iconfont/iconfont';
import Header1 from './common/header/index1';
import store from './store/index';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

// 主组件入口
function App() {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <GlobalStyleIcon/>
            <BrowserRouter>
                <Header1/>
                <Route path='/' exact component = {Home} />
                <Route path='/detail' exact component = {Detail} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;

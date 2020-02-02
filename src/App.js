import React from 'react';
import { Provider } from 'react-redux';
import {GlobalStyle} from './style';
import {GlobalStyleIcon} from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store/index';

// 主组件入口
function App() {
  return (
    <Provider store = {store}>
        <GlobalStyle/>
        <GlobalStyleIcon/>
        <Header />
    </Provider>
  );
}

export default App;

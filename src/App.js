import React from 'react';
import { Provider } from 'react-redux';
import {GlobalStyle} from './style';
import {GlobalStyleIcon} from './statics/iconfont/iconfont';
import Header1 from './common/header/index1';
import store from './store/index';

// 主组件入口
function App() {
  return (
    <Provider store = {store}>
        <GlobalStyle/>
        <GlobalStyleIcon/>
        <Header1 />
    </Provider>
  );
}

export default App;

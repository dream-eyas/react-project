import React from 'react';
import {GlobalStyle} from './style';
import {GlobalStyleIcon} from './statics/iconfont/iconfont';
import Header from './common/header';

// 主组件入口
function App() {
  return (
    <div>
        <GlobalStyle/>
        <GlobalStyleIcon/>
        <Header />
    </div>
  );
}

export default App;

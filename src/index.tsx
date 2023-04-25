//外側のコンポーネント
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



//プロップスの追加 Appコンポーネント側にデータを渡した
ReactDOM.render(<App  message="Hello React!"/>,
 document.getElementById('root')
 );

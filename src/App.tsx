import React from 'react';
import Counter from './Counter'; //Counterコンポーネントのインポート

interface AppProps{
  message?:string; //ジェネリクス型にする
}

const App:React.FunctionComponent<AppProps> = ({message}) => { //関数に対してアノテーション
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: 'Hello,defaltProps!' //デフォルト値の設定
}

export default App;

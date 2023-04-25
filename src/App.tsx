import React from 'react';

interface AppProps{
  message:string;
}

const App = ({message} : AppProps) => { //引数を具体的にすることで型制約 & 外側のコンポーネントで存在しないものの定義を防ぐ
  //const {message} = props; //propsというオブジェクトの中からmessageだけ取り出している
  return <div>{message}</div>;
};

export default App;

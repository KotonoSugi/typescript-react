import React,{ useEffect,useRef,useState } from "react"; //Componentの実装に必要

const Counter: React.FC<{}> = () =>{ //FCはFunctionComponentのこと
  const initialValue: any = 0;
  const[value , setValue] =useState<number>(initialValue); //useStateに与える型引数で、valueやsetVallueの型が決まる

  
  const increment = () =>{
    setValue(value +1);
  }

  const decrement = () =>{
    setValue(value -1);
  }

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current +=1;
  });
  const ref =useRef<HTMLInputElement>(null);
  const focusInput = () => {
    const current =ref.current;
    if(current !=null) current.focus();
  }

  return (
    <div>
      <div>value : {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This Component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>click Me!</button>
    </div>
  );
};

export default Counter;


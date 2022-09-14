import React, { useState } from 'react'
const CounterTest = () => {
  const [counter, setCounter] = useState(0);
  const increase = ()=>{
    setCounter(counter+1);
  };
  const decrease = ()=>{
    if(counter>0){
      setCounter(counter-1);
    } else if(counter===0){
      alert('Nada que decrementar');
    }
  };
  return(
    <>
    <div className='counter'>
      <h2>Counter</h2>
      <h2>{counter}</h2>
      <button onClick={()=>{decrease()}}>-</button>
      <button onClick={()=>{increase()}}>+</button>
    </div>
    </>
  );
};
export default CounterTest;
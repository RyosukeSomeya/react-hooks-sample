import React, { useState } from 'react';

const App = () => {
  // useStateは配列を返す
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((prevCount) => prevCount + 1);
  const decrement2 = () => setCount((prevCount) => prevCount - 1);
  const double = () => setCount((prevCount) => prevCount * 2);
  const div3 = () =>
    setCount((prevCount) => {
      if (prevCount % 3 === 0) {
        return prevCount / 3;
      } else {
        return prevCount;
      }
    });

  const reset = () => setCount(0);

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={div3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;

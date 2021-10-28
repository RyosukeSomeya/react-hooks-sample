import React, { useEffect, useState } from 'react';

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  // レンダリング後に呼ばれる
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate');
  });
  // 初回レンダリング後にだけ呼ばれる
  useEffect(() => {
    console.log('This is like componentDidMount');
  }, []);

  // nameが更新されたときだけレンダリング後に呼ばれる
  useEffect(() => {
    console.log('This callback is for name only.');
  }, [name]);

  const renderPeriod = () => {
    console.log('renderPriod renders period.');
    return '。';
  };

  return (
    <>
      <p>
        現在の{state.name}は、{price}円です{renderPeriod()}
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>reset</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default App;

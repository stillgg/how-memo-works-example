import { useState, useEffect, useCallback, memo } from "react";

const Foo = memo(({ arr, setArr, increment }) => {
  console.log("render foo");

  useEffect(() => {
    console.log("effect foo");

    setTimeout(() => {
      setArr([{ value: 1 }, { value: 2 }]);
    }, 500);
  }, []);

  return (
    <div>
      <button onClick={increment}>Foo</button>

      <br />

      {arr.map((item) => (
        <div key={item.value}>{item.value}</div>
      ))}
    </div>
  );
});

const Bar = ({ counter, increment, decrement }) => {
  console.log("render bar");

  return (
    <div>
      <h1>Bar</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <h2>{counter}</h2>
    </div>
  );
};

export default function App() {
  const [arr, setArr] = useState([]);

  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <Foo
        arr={arr}
        setArr={setArr}
      />
      <Bar counter={counter} increment={increment} decrement={decrement} />
    </div>
  );
}

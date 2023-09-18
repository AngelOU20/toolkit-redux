import { useDispatch, useSelector } from "react-redux";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { decrement, increment, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="#">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Toolkit and React Redux</h1>
      <div className="card">
        <h2 className="card-title">Count is: {counter}</h2>
        <div className="card-buttons">
          <button onClick={() => dispatch(increment())}>Increment value</button>
          <button onClick={() => dispatch(decrement())}>Decrement value</button>
          <button onClick={() => dispatch(incrementBy(2))}>
            Increment by 2
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

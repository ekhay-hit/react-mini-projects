import { useState, useReducer } from "react";
// reducer function
// reducer receive two parameters current state and action
function reducer(state, action) {
  // here we can return state base on the action
  if (action.type === "inc") return state + action.payload;
  if (action.type === "dec") return state + action.payload;
  if (action.type === "setCount") return action.payload;
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // user reducer instead of state above
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);// this is when we use state
    // follwing when we use reducer
    dispatch({ type: "dec", payload: -1 });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step); // dispatch is calling the reducer function
    dispatch({ type: "inc", payload: +1 });
  };

  //get the value from the input
  const defineCount = function (e) {
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.nilai);
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleOption = (e) => {
    const selected = e.target.value;
    setSelectedOption(selected);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      if (amount) {
        if (selectedOption == "increment") {
          dispatch(incrementByAmount(parseInt(amount)));
          setError(false);
        } else if (selectedOption == "decrement") {
          dispatch(decrementByAmount(parseInt(amount)));
          setError(false);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <section style={{ display: "flex" }}>
      <div style={{ margin: "auto", display: "flex", flexDirection: "column" }}>
        <div style={{ margin: "auto", marginTop: "20px" }}>{count}</div>

        <div style={{ margin: "auto", marginTop: "20px" }}>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <select onChange={(e) => handleOption(e)}>
            <option value="-">-</option>
            <option value="increment">Increment</option>
            <option value="decrement">Decrement</option>
          </select>
          <input type="number" placeholder="Amount" value={amount} onChange={handleChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {error ? <ErrorAlert setError={setError} /> : ""}
      </div>
    </section>
  );
};

const ErrorAlert = ({ setError }) => {
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 3000);
  });

  return <h4 style={{ margin: "auto", marginTop: "20px" }}>Invalid Input</h4>;
};

export default Counter;

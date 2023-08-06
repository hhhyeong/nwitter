import React from "react";
import { useState } from "react";

export default function Counter({ total, onClick }) {
  //   let num = 0;
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p className="number">
        {count}
        <span className="total">/{total}</span>
      </p>
      <button
        className="button"
        onClick={() => {
          //   setCount(3);
          setCount((prev) => prev + 1);
          //   setCount((prev) => prev + 1);
          //   setCount((prev) => prev + 1);
          //   setCount((prev) => prev + 1);
          //   setCount(count + 1);
          //   console.log(count);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}

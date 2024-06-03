import React, { useState } from "react";

export const Counter_incr_decr = () => {
  let [count, setCount] = useState(0);

  const onIncr = () => {
    setCount((count = count + 1));
  };
  const onDecr = () => {
    setCount((count = count > 0 ? count - 1 : count));
  };
  return (
    <div className="text-center mt-5">
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={onIncr}>
        Incr
      </button>
      <button className="btn btn-secondary" onClick={onDecr}>
        Decr
      </button>
    </div>
  );
};

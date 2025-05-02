import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent re-rendered");
  return <button onClick={onClick}>Click Me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // The function is only created once

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;

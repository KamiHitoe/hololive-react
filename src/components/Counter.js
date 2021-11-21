import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count+1)}>hot!</button>
      <p>{count} times hot!</p>
    </div>
  )
}


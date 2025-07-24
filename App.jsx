import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Reactゲームへようこそ！</h1>
      <p>カウント：{count}</p>
      <button onClick={() => setCount(count + 1)}>+1する</button>
    </div>
  );
}

export default App;

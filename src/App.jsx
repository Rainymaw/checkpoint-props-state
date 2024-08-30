import Header from "./Components/Header";
import "./App.css";
import Gameboard from "./Components/Gameboard";
import { useState } from "react";

function App() {
  let [playerscore, setPlayerscore] = useState(0);
  let [cpuscore, setCpuscore] = useState(0);
  return (
    <>
      <Header playerscore={playerscore} cpuscore={cpuscore} />
      <Gameboard setPlayerscore={setPlayerscore} setCpuscore={setCpuscore} />
    </>
  );
}

export default App;

import { useState } from 'react';

function Counter() {
    // Declare a state variable named 'count', initialized to 0
    const [count, setCount] = useState(0);

    // Function to increment the count
    const increment = () => {
        setCount((count)=>count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=>increment()}>Increment</button>
        </div>
    );
};

export default Counter;

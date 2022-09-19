import { useState, useMemo } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Hocred cmp={Counter} />
      <Counter />
    </div>
  );
}
function Hocred(props) {
  return (
    <>
      <p>
        hoc component means pass component as props as input and recives
        component as output called HOC{" "}
      </p>
      <h3
        style={{
          backgroundColor: "red",
          height: 70,
          width: 60,
          color: "black"
        }}
      >
        <props.cmp />{" "}
      </h3>
    </>
  );
}
function Counter() {
  const [count, setcount] = useState(0);
  function Incri() {
    setcount(count + 1);
  }
  return (
    <div className="App">
      <h3>count:{count}</h3>
      <button onClick={Incri}>incriment</button>
    </div>
  );
}

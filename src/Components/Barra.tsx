import { useState } from "react";
//https://codepen.io/dhruvangg/pen/jOVjeLE
export default function Barra() {
  const [count, setCount] = useState(0);
  const [nivel, setNivel] = useState("Tolerancia");

  const teste = function (count: number) {
    setCount(count);
    if (count == 50) {
      return setNivel("neutro");
    }
    if (count == 25) {
      return setNivel("Pouco");
    }
    if (count == 0) {
      return setNivel("Nenhum");
    }
    if (count == 75) {
      return setNivel("Alto");
    } else {
      return setNivel("Bastante");
    }
  };
  return (
    <div>
      <label htmlFor="">
        <input
          type="range"
          step={25}
          value={count}
          // onChange={(e) => setCount(parseInt(e.target.value))}
          onChange={(e) => teste(parseInt(e.target.value))}
        />
      </label>

      <p>{nivel}</p>
    </div>
  );
}

import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

// Componentes e islas deben llamarse igual el fichero como el componente
// Siempre la primera letra en mayuscula en el nombre del fichero y del componente

type CounterProps = {
  initialValue: number;
};

const Counter: FunctionComponent<CounterProps> = (props) => {
  const [number, setNumber] = useState<number>(props.initialValue); //use state es un hook que nos permite manejar el estado de un componente
  return (
    <div>
      <h1>{number}</h1>
      <button disabled={number === 0} onClick={() => setNumber(number - 1)}>
        Restarle a 1
      </button>
      {number === 0 && <h2>Has llegado</h2>}
    </div>
  );
};

export default Counter;

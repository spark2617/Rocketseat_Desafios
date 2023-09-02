import { Minus, Plus } from "phosphor-react";
import { Container } from "./InputNumber.style";
import { useContext, useEffect, useReducer } from "react";
import { Reducer } from "../reducer/CoffeReducer";


// Defina os tipos de estado e ação
interface State {
  quantCoffe: number;
}

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };



export function InputNumber() {

  
  
  const [state, dispatch] = useReducer(Reducer, { quantCoffe: 1 });

  function handleIncreaseValue() {
    
    dispatch({ type: 'INCREMENT' });
  }

  function handleDecreaseValue() {
    
    dispatch({ type: 'DECREMENT' });
  }

  return (
    <Container>
      <button onClick={handleDecreaseValue}>
        <Minus weight="bold" />
      </button>

      <input
        type="number"
        value={state.quantCoffe}
        min={1}
        max={999}
        readOnly
      />

      <button onClick={handleIncreaseValue}>
        <Plus weight="bold" />
      </button>
    </Container>
  );
}

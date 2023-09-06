import { Minus, Plus } from "phosphor-react";
import { Container } from "./InputNumber.style";
import { useContext, useEffect } from "react";


interface Modifique{
  count:number
  modificadorReducer:(acao:string)=>void
}

export function InputNumber({count,modificadorReducer:handleModifi}:Modifique) {


  function handleIncreaseValue() {
    handleModifi("INCREMENT")

  }

  function handleDecreaseValue() {
    handleModifi("DECREMENT")
  }

  

  return (
    <Container>
      <button onClick={handleDecreaseValue}>
        <Minus weight="bold" />
      </button>

      <input
        type="number"
        value={count}
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

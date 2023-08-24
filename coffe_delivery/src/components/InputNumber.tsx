import { Minus, Plus } from "phosphor-react";
import { Container } from "./InputNumber.style";

export function InputNumber() {
  return (

    <Container>

      <button>
          <Minus
          weight="bold"
          />
      </button>

      <input
        type="number"
        value={1}
        min={1}
        max={999}
      />

      <button>
        <Plus
          weight={"bold"}

        />
      </button>



    </Container>
  )
}
import { InputNumber } from "./InputNumber"
import { Trash } from "phosphor-react"
import { Container, MiniImgCoffe, ContainerdoisButton, ButtonRemover, NameCoffe, PriceCoffe } from "./CardPagCheckout.style"
import { defaultTheme } from "../style/themes/defalt"
import { useReducer } from "react"
import { Reducer } from "../reducer/CoffeReducer"

interface InfoCoffe {
    id: number,
    name: string,
    price: string
    urlImg: string
    quantidade: number
}
interface Delete {
    delete: (id: number) => void
}
type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESTART" };



export function CardPagCheckout({ id, name, price, urlImg, delete: handleDelete, quantidade }: InfoCoffe & Delete) {

    
    const [state, dispatch] = useReducer(Reducer, { count: quantidade });

    function manipuladorReducer(acao:string):void{
        if(acao=="INCREMENT"){
            dispatch({ type: 'INCREMENT' });

        }else if(acao=="DECREMENT"){
            dispatch({ type: 'DECREMENT' });
        }
    }

    return (
        <Container>

            <MiniImgCoffe src={urlImg} />

            <div>
                <NameCoffe>{name}</NameCoffe>

                <ContainerdoisButton>

                <InputNumber count={state.count} modificadorReducer={manipuladorReducer} />

                    <ButtonRemover
                        onClick={() => {
                            handleDelete(id)
                        }}><Trash color={defaultTheme.purple} size={16} />REMOVER</ButtonRemover>
                </ContainerdoisButton>

            </div>
            <PriceCoffe>R$ {price}</PriceCoffe>
        </Container>
    )
}
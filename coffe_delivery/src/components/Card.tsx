import { ShoppingCartSimple } from "phosphor-react";
import { ButtonShopping, Buy, CardCoffe, Categoria, ContainerFinancial, ImgCoffe, Price, Real, ContainerCategory } from "./Card.style.ts"
import { InputNumber } from "./InputNumber.tsx";
import {useReducer,createContext,useContext } from "react"
import { Reducer } from "../reducer/CoffeReducer.ts";
import { CoffeeContext, CoffeeContextType } from "../content/CoffeContent.tsx";


interface Coffe {
    id: number
    name: string,
    description: string,
    categoria: string[],
    price: string,
    urlImg: string
}


export interface Cart {
    itemId: number;
    total: number;
}



export interface State {
    count: number;
  }
  
  type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESTART" };

  



export function Card({ id, name, description, categoria, price, urlImg }: Coffe) {

   
    const [state, dispatch] = useReducer(Reducer, { count: 1 });

    function manipuladorReducer(acao:string):void{
        if(acao=="INCREMENT"){
            dispatch({ type: 'INCREMENT' });

        }else if(acao=="DECREMENT"){
            dispatch({ type: 'DECREMENT' });
        }
    }

    const coffeeContext=useContext<CoffeeContextType>(CoffeeContext);
    

    function colocarItemCarrinho() {

        coffeeContext.colocarItemCarrinho(id,state.count)
        
        console.log("Carrinho atualizado no armazenamento local");
        dispatch({ type: "RESTART" })
           

            
    }


    return (
        <CardCoffe>

            <ImgCoffe src={urlImg} alt="" />


            <ContainerCategory>
                {categoria.map((item, index) => (
                    <Categoria key={index}>{item}</Categoria>
                ))}
            </ContainerCategory>

            <h2>{name}</h2>

            <p>{description}</p>

            <ContainerFinancial>
                <div>
                    <Real>R$</Real>
                    <Price>{price}</Price>
                </div>



                <Buy>
                    

                        <InputNumber count={state.count} modificadorReducer={manipuladorReducer} />
                    
                    
                    


                    <ButtonShopping
                    onClick={colocarItemCarrinho}
                    >
                        <ShoppingCartSimple
                            size={22}
                            weight="fill"
                        />
                    </ButtonShopping>
                </Buy>

            </ContainerFinancial>
        </CardCoffe>
    )
}
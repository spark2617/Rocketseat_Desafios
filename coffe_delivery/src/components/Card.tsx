import { ShoppingCartSimple } from "phosphor-react";
import { ButtonShopping, Buy, CardCoffe, Categoria, ContainerFinancial, ImgCoffe, Price, Real, ContainerCategory } from "./Card.style.ts"
import { InputNumber } from "./InputNumber.tsx";
import {useReducer} from "react"
import { Reducer } from "../reducer/CoffeReducer.ts";


interface Coffe {
    id: number
    name: string,
    description: string,
    categoria: string[],
    price: string,
    urlImg: string
}


interface Cart {
    itemId: number;
    total: number;
}


export function Card({ id, name, description, categoria, price, urlImg }: Coffe) {

   

    function colocarItemCarrinho() {

        const cart: Cart = {
            itemId: id,
            total: 0
        }

        localStorage.setItem('coffeCart', JSON.stringify(cart));

        
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
                    
                        <InputNumber />
                    
                    


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
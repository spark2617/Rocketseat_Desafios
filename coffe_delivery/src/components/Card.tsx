import { ShoppingCartSimple } from "phosphor-react";
import { ButtonShopping, Buy, CardCoffe, Categoria, ContainerFinancial, ImgCoffe, Price, Real } from "./Card.style.ts"
import { InputNumber } from "./InputNumber.tsx";
import imgCoffee from "../assets/Coffee.svg"

export function Card() {
    return (
        <CardCoffe>
            <ImgCoffe src={imgCoffee} alt="" />

             <Categoria>Tradicional</Categoria>

            <h2>Expresso Tradicional</h2>

            <p>O tradicional café feito com água quente e grãos moídos</p>

            <ContainerFinancial>
                <div>
                    <Real>R$</Real>
                    <Price>9,90</Price>
                </div>



                <Buy>
                    <InputNumber />


                    <ButtonShopping>
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
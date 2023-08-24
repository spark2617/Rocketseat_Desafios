import { InputNumber } from "./InputNumber"
import imgCoffeMin from "../assets/Coffee.svg"
import { Trash } from "phosphor-react"
import { Container, MiniImgCoffe, ContainerdoisButton,ButtonRemover,NameCoffe,PriceCoffe } from "./CardPagCheckout.style"
import { defaultTheme } from "../style/themes/defalt"



export function CardPagCheckout() {
    return (
        <Container>
            
            <MiniImgCoffe src={imgCoffeMin}/>

            <div>
                <NameCoffe>Expresso tradicional</NameCoffe>

                <ContainerdoisButton>
                    <InputNumber/>
                    <ButtonRemover><Trash color={defaultTheme.purple} size={16}/>REMOVER</ButtonRemover>
                </ContainerdoisButton>

            </div>
                <PriceCoffe>R$ 9,90</PriceCoffe>
        </Container>
    )
}
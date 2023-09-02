import logo from "../assets/Logo.svg"
import { defaultTheme } from "../style/themes/defalt"
import { ButtonCar, ButtonLocation,  DivTwoButton, HeaderContainer,CountItemCar } from "./Header.style"
import { MapPin, ShoppingCart } from "phosphor-react"


//faltar colocar o numero de item no carrinho >>>> a ideia é usar uma span com uma div no centro

export function Header() {
    return (
        <HeaderContainer>

            <div>
                <img src={logo} alt="" />
            </div>

            <DivTwoButton>
                <ButtonLocation>

                    <MapPin size={22} weight="fill" />
                    <span>Sinop,MT</span>

                </ButtonLocation>


                <ButtonCar>

                    <ShoppingCart 
                    size={22} 
                    color={defaultTheme["yellow-dark"]} 
                    weight="fill" 
                    />
                    <CountItemCar>1</CountItemCar>

                </ButtonCar>
            </DivTwoButton>

        </HeaderContainer>
    )
}
import { useNavigate } from "react-router-dom"
import logo from "../assets/Logo.svg"
import { CoffeeContext, CoffeeContextType } from "../content/CoffeContent"
import { defaultTheme } from "../style/themes/defalt"
import { Cart } from "./Card"
import { ButtonCar, ButtonLocation, DivTwoButton, HeaderContainer, CountItemCar } from "./Header.style"
import { MapPin, ShoppingCart } from "phosphor-react"
import { useEffect, useContext, useState } from "react"


export function Header() {

    const coffeeContext = useContext<CoffeeContextType>(CoffeeContext);

    const [itemCount, setItemCount] = useState<number>(0)

    const navigate = useNavigate()

    function countStoragem(): void {

        const itemCount: number = coffeeContext.carrinho.reduce((acumulador: number, obj: Cart) => {
            return acumulador + obj.total

        }, 0)

        setItemCount(itemCount);

}

    function mudarPag(){
        navigate('/form')
    }


useEffect(() => {
    console.log("useEffect is running");

    countStoragem()

}, [coffeeContext.carrinho])


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


            <ButtonCar onClick={mudarPag}>

                <ShoppingCart
                    size={22}
                    color={defaultTheme["yellow-dark"]}
                    weight="fill"
                />
                {itemCount >= 1 ? <CountItemCar> {itemCount} </CountItemCar> : ""}

            </ButtonCar>
        </DivTwoButton>

    </HeaderContainer>
)
}
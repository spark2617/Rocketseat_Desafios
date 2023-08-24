import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import coffee from "../../assets/Img_coffee.svg"
import { defaultTheme } from "../../style/themes/defalt"
import { Centralizar, Circle, Container, ContainerIntens, ListCoffe, NossosCafe } from "./style"
import { Card } from "../../components/Card.tsx"




export function Home() {
    return (
        <div>
            <Container>

                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>

                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <ContainerIntens>
                        <div>
                            <Circle bg={defaultTheme["yellow-dark"]}>
                                <ShoppingCart
                                    size={16}
                                    color={defaultTheme["white"]}
                                    weight="fill"
                                />
                            </Circle>
                            <p> Compra simples e segura</p>
                        </div>
                        <div>
                            <Circle bg={defaultTheme["base-text"]}>
                                <Package
                                    size={16}
                                    color={defaultTheme["white"]}
                                    weight="fill"
                                />
                            </Circle>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <Circle bg={defaultTheme.yellow}>
                                <Timer
                                    size={16}
                                    color={defaultTheme["white"]}
                                    weight="fill"
                                />
                            </Circle>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <Circle bg={defaultTheme.purple}>
                                <Coffee
                                    size={16}
                                    color={defaultTheme["white"]}
                                    weight="fill"
                                />
                            </Circle>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </ContainerIntens>
                </div>


                <div>
                    <img src={coffee} alt="" />
                </div>



            </Container>



            <NossosCafe>
                <h2>Nossos cafés</h2>
            </NossosCafe>

            <Centralizar>
                <ListCoffe>

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </ListCoffe>
            </Centralizar>



        </div>
    )
}
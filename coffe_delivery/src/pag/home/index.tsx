import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"
import coffee from "../../assets/Img_coffee.svg"
import { defaultTheme } from "../../style/themes/defalt"
import { Centralizar, Circle, Container, ContainerIntens, ListCoffe, NossosCafe } from "./style"
import { Card } from "../../components/Card.tsx"
import { useContext } from "react"
import { CoffeeContext } from "../../content/CoffeContent.tsx"

interface Coffe{
    
    id:number,
    name:string,
    description:string,
    categoria:string[],
    price:string,
    urlImg:string
}

interface CoffeeContextType{
    listCoffe:Coffe[]
}

export function Home() {

    const coffeeContext=useContext<CoffeeContextType>(CoffeeContext);
    

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

                {coffeeContext.listCoffe.map(item => (
                    
                        <Card key={item.id} id={item.id} name={item.name} description={item.description} categoria={item.categoria} price={item.price} urlImg={item.urlImg} />
                    ))}

                </ListCoffe>
            </Centralizar>



        </div>
    )
}
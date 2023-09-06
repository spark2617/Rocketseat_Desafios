import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Circle } from "../home/style";
import { Container, MsmSuccess, Normal, Negrito, InformacaoEntrega, Topico, ContainerSpan, ContainerTwoCenter, DivImgMotoDelivery } from "./style";
import { defaultTheme } from "../../style/themes/defalt";
import imgMotoDelivery from "../../assets/Illustration.svg"
import { useContext } from "react";
import { CoffeeContext } from "../../content/CoffeContent";

export function SuccessPag() {

    const context=useContext(CoffeeContext);

    return (
        <Container>

            <MsmSuccess>
                <strong>Uhu! Pedido confirmado</strong>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </MsmSuccess>

            <ContainerTwoCenter>
                <InformacaoEntrega>
                    <Topico>
                        <div>
                            <Circle bg={defaultTheme.purple}>
                                <MapPin
                                    size={16}
                                    color={defaultTheme.background}
                                    weight="fill"
                                />
                            </Circle>
                        </div>
                        <Normal>Entrega em
                            <Negrito> Rua {context.endereco.rua}, </Negrito>
                            {context.endereco.numero} {context.endereco.bairro} - {context.endereco.cidade}, {context.endereco.uf}
                        </Normal>
                    </Topico>

                    <Topico>
                        <div>
                            <Circle bg={defaultTheme.yellow}>
                                <Timer
                                    size={16}
                                    color={defaultTheme["white"]}
                                    weight="fill"
                                />
                            </Circle>
                        </div>
                        <div>
                            <ContainerSpan>

                                <Normal>Previsão de entrega</Normal>
                                <Negrito>20 min - 30 min</Negrito>
                            </ContainerSpan>
                        </div>
                    </Topico>
                    <Topico>
                        <div>
                            <Circle bg={defaultTheme["yellow-dark"]}>
                                <CurrencyDollar
                                    size={16}
                                    color={defaultTheme["white"]}
                                    weight="fill"
                                />
                            </Circle>
                        </div>
                        <div>
                            <ContainerSpan>

                                <Normal>Pagamento na entrega</Normal>
                                <Negrito>{context.endereco.formaPagamento}</Negrito>
                            </ContainerSpan>
                        </div>

                    </Topico>
                </InformacaoEntrega>


                <DivImgMotoDelivery>
                    <img src={imgMotoDelivery} alt="" />
                </DivImgMotoDelivery>
            </ContainerTwoCenter>

            {/* container */}
        </Container>
    )
}
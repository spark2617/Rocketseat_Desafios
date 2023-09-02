import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Circle } from "../home/style";
import { Container, MsmSuccess, Normal, Negrito, InformacaoEntrega, Topico, ContainerSpan, ContainerTwoCenter, DivImgMotoDelivery } from "./style";
import { defaultTheme } from "../../style/themes/defalt";
import imgMotoDelivery from "../../assets/Illustration.svg"

export function SuccessPag() {
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
                            <Negrito> Rua João Daniel Martinelli, </Negrito>
                            102 Farrapos - Porto Alegre, RS
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
                                <Negrito>Cartão de Crédito</Negrito>
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
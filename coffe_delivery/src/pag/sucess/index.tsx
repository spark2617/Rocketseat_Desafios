import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Circle } from "../home/style";
import { Container, MsmSuccess, Normal, Negrito, InformacaoEntrega } from "./style";
import { defaultTheme } from "../../style/themes/defalt";

export function SuccessPag() {
    return (
        <Container>

            <MsmSuccess>
                <strong>Uhu! Pedido confirmado</strong>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </MsmSuccess>

            <div>
                <InformacaoEntrega>
                    <div>
                        <Circle bg={defaultTheme.purple}>
                            <MapPin
                                size={16}
                                color={defaultTheme.background}
                                weight="fill"
                            />
                        </Circle>
                        <Normal>Entrega em 
                            <Negrito> Rua João Daniel Martinelli, </Negrito>
                             102 Farrapos - Porto Alegre, RS
                        </Normal>
                    </div>

                    <div>
                        <Circle bg={defaultTheme.yellow}>
                            <Timer
                                size={16}
                                color={defaultTheme["white"]}
                                weight="fill"
                            />
                        </Circle>
                        <div>
                            <Normal>Previsão de entrega</Normal>
                            <Negrito>20 min - 30 min</Negrito>
                        </div>
                    </div>
                    <div>
                        <Circle bg={defaultTheme["yellow-dark"]}>
                            <CurrencyDollar
                                size={16}
                                color={defaultTheme["white"]}
                                weight="fill"
                            />
                        </Circle>
                        <Normal>Pagamento na entrega</Normal>
                        <Negrito>Cartão de Crédito</Negrito>
                    </div>
                </InformacaoEntrega>


                <div></div>
            </div>

            {/* container */}
        </Container>
    )
}
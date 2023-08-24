import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ButtonConfirmar, ContainerPagDelivery, ContainerPagament, DivFormEndereco, FormDelivery, InfoColumn, InfoCompre, InputGrid, TitleDiv, TitleXS, TresButton, ValueFinal, ValueProduct } from "./style";
import { defaultTheme } from "../../style/themes/defalt";
import { CardPagCheckout } from "../../components/CardPagCheckout";

export function ServiceDelivery() {
    return (
        <ContainerPagDelivery>

            <div>
                <TitleXS>Complete seu pedido</TitleXS>
                <DivFormEndereco>
                    <TitleDiv>
                        <MapPinLine
                            size={22}
                            color={defaultTheme["yellow-dark"]}
                        />
                        <div>
                            <span>Enderoço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </TitleDiv>
                    <FormDelivery action="">
                        <InputGrid placeholder="CEP" grid={"1 / span 10"} type="text" />
                        <InputGrid placeholder="Rua" grid={"2 / span 28"} type="text" />
                        <InputGrid placeholder="Número" grid={"3 / span 10"} type="text" />
                        <InputGrid placeholder="Complemnto" grid={"3 / span 18"} type="text" />
                        <InputGrid placeholder="Barrio" grid={"4 / span 10"} type="text" />
                        <InputGrid placeholder="Cidade" grid={"4 / span 14"} type="text" />
                        <InputGrid placeholder="UF" grid={"4 / span 4"} type="text" />
                    </FormDelivery>
                </DivFormEndereco>


                <ContainerPagament>
                    <TitleDiv>
                        <CurrencyDollar
                            size={22}
                            color={defaultTheme.purple}
                        />
                        <div>
                            <span>Pagamento</span>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </TitleDiv>

                    <TresButton>
                        <button><CreditCard
                            size={16}
                            color={defaultTheme.purple}
                        /> CARTÃO DE CRÉDITO</button>

                        <button><Bank
                            size={16}
                            color={defaultTheme.purple}
                        />CARTÃO DE DÉBITO</button>

                        <button><Money
                            size={16}
                            color={defaultTheme.purple}
                        />DINHEIRO</button>
                    </TresButton>

                </ContainerPagament>

            </div>

            <div>
                <TitleXS>Cafés selecionados</TitleXS>
                <InfoCompre>

                <CardPagCheckout/>
                <CardPagCheckout/>
                <CardPagCheckout/>
                <CardPagCheckout/>

                    <InfoColumn>
                    
                        <div>
                            <ValueProduct>Total de itens</ValueProduct>
                            <ValueProduct>10,00</ValueProduct>
                        </div>

                        <div>
                            <ValueProduct>Entrega</ValueProduct>
                            <ValueProduct>10,00</ValueProduct>
                        </div>

                        <div>
                            <ValueFinal>Total</ValueFinal>
                            <ValueFinal>20,00</ValueFinal>
                        </div>

                    </InfoColumn>
                    <ButtonConfirmar>CONFIRMAR PEDIDO</ButtonConfirmar>
                </InfoCompre>
            </div>

        </ContainerPagDelivery>
    )
}
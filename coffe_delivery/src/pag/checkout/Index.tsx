import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { ButtonConfirmar, ContainerPagDelivery, ContainerPagament, DivFormEndereco, FormDelivery, InfoColumn, InfoCompre, InputGrid, TitleDiv, TitleXS, TresButton, ValueFinal, ValueProduct } from "./style";
import { defaultTheme } from "../../style/themes/defalt";
import { CardPagCheckout } from "../../components/CardPagCheckout";
import { CoffeeContext, CoffeeContextType, } from "../../content/CoffeContent";
import { useContext, useEffect, useState } from "react"
import { Coffe } from "../home";
import { Cart } from "../../components/Card";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import zod from "zod"
import { Link, useNavigate } from "react-router-dom";

export function ServiceDelivery() {



    const newCoffeValidation = zod.object({
        cep: zod.string().min(8, "cep invalid").max(8, "cep invalid"),
        rua: zod.string().min(3, "informe o nome da rua"),
        numero: zod.number(),
        complemento: zod.string().optional(),
        bairro: zod.string().min(3, "informe o bairro"),
        cidade: zod.string().min(1, "informe o cidade"),
        uf: zod.string().min(2, "estado invalido").max(2, "estado invalido").transform((uf) => uf.toUpperCase()),
        formaPagamento:zod.string()

    })

    const { register, handleSubmit, watch, reset } = useForm({
        resolver: zodResolver(newCoffeValidation),
        defaultValues: {
            cep: "",
            rua: "",
            numero: null,
            complemento: "",
            bairro: "",
            cidade: "Sinop",
            uf: "mt",
            formaPagamento:"Cartão Credito"
        }
    })


    const navigate = useNavigate()

    const coffeeContext = useContext<CoffeeContextType>(CoffeeContext);

    const listCoffee: Coffe[] = coffeeContext.listCoffe;

    const itensNoCarrinho: Cart[] = coffeeContext.carrinho;

    const coffeeNoCarrinho: Coffe[] = listCoffee
        .filter(coffee => {
            return itensNoCarrinho.some(cartItem => cartItem.itemId === coffee.id);
        })
        .map(coffee => {
            const cartItem = itensNoCarrinho.find(cartItem => cartItem.itemId === coffee.id);
            return {
                ...coffee,
                total: cartItem ? cartItem.total : null,
            };
        });

    const [objCart, setObjCart] = useState<Coffe[]>([]);

    useEffect(() => {
        setObjCart(coffeeNoCarrinho);

    }, []);




    function deleteCard(id: number) {
        const newCards = objCart.filter(item => item.id != id)
        setObjCart(newCards)

        coffeeContext.deletarItemNaStoragem(id)

    }

    function calcularEntrega(): number {
        let result: number = objCart.length * 10
        return result
    }

    function calcularTotal(): number {
        let result: number = calcularEntrega() + coffeeContext.determinarValorNoCarrinho()
        return result
    }

    function transformarNumber(num: number): string {
        let result: string = num.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return result
    }


    function isValidForm(data: any):void{

        coffeeContext.setEndereco(data)
        coffeeContext.limparCarrinho()
        reset()
        navigate('/success')


    }



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
                    <FormDelivery id={"formCoffe"} onSubmit={handleSubmit(isValidForm)} action="">
                        <InputGrid {...register("cep")} placeholder="CEP" grid={"1 / span 10"} type="text" />
                        <InputGrid {...register("rua")} placeholder="Rua" grid={"2 / span 28"} type="text" />
                        <InputGrid {...register("numero", { valueAsNumber: true })} placeholder="Número" grid={"3 / span 10"} type="text" />
                        <InputGrid {...register("complemento")} placeholder="Complemnto" grid={"3 / span 18"} type="text" />
                        <InputGrid {...register("bairro")} placeholder="Barrio" grid={"4 / span 10"} type="text" />
                        <InputGrid {...register("cidade")} placeholder="Cidade" grid={"4 / span 14"} type="text" />
                        <InputGrid {...register("uf")} placeholder="UF" grid={"4 / span 4"} type="text" />
                        
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
                        <input value={"Cartão Credito"} {...register("formaPagamento")} type="radio" id="cartaoCredito" name="formaPagamento" />
                        <label htmlFor="cartaoCredito">
                            <CreditCard size={16} color={defaultTheme.purple} /> CARTÃO DE CRÉDITO
                        </label>

                        <input value={"Cartão Débito"} {...register("formaPagamento")} type="radio" id="cartaoDebito" name="formaPagamento" />
                        <label htmlFor="cartaoDebito">
                            <Bank size={16} color={defaultTheme.purple} /> CARTÃO DE DÉBITO
                        </label>

                        <input value={"Dinheiro"} {...register("formaPagamento")} type="radio" id="dinheiro" name="formaPagamento" />
                        <label htmlFor="dinheiro">
                            <Money size={16} color={defaultTheme.purple} /> DINHEIRO
                        </label>
                    </TresButton>

                </ContainerPagament>

            </div>

            <div>
                <TitleXS>Cafés selecionados</TitleXS>
                <InfoCompre>

                    {
                        objCart.map(coffee => (
                            <CardPagCheckout key={coffee.id} id={coffee.id} name={coffee.name} price={coffee.price} urlImg={coffee.urlImg} delete={deleteCard} quantidade={coffee.total}></CardPagCheckout>

                        ))
                    }

                    <InfoColumn>

                        <div>
                            <ValueProduct>Total de itens</ValueProduct>
                            <ValueProduct>{transformarNumber(coffeeContext.determinarValorNoCarrinho())}</ValueProduct>
                        </div>

                        <div>
                            <ValueProduct>Entrega</ValueProduct>
                            <ValueProduct>{transformarNumber(calcularEntrega())}</ValueProduct>
                        </div>

                        <div>
                            <ValueFinal>Total</ValueFinal>
                            <ValueFinal>{transformarNumber(calcularTotal())}</ValueFinal>
                        </div>

                    </InfoColumn>

                    <ButtonConfirmar form="formCoffe" type="submit" >CONFIRMAR PEDIDO</ButtonConfirmar>

                </InfoCompre>
            </div>

        </ContainerPagDelivery>
    )
}
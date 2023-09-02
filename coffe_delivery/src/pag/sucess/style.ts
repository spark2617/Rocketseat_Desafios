import styled from "styled-components";


export const Container=styled.div`




`


export const MsmSuccess=styled.div`

    display:flex;
    flex-direction: column;
    justify-content: space-around;

    padding-left:160px;
    
    strong{
        font-size:2rem;
        font-weight:800;
        line-height:130%;

        color: ${props=>props.theme["yellow-dark"]};
    }
    
    span{
        font-size:1.25rem;
        font-weight:400;
        line-height:130%;

        color: ${props=>props.theme["base-subtitle"]}; 
    }
    

`

export const Normal=styled.span`

    font-size: 1rem;
    font-weight:400;
    line-height: 130%;

    color: ${props=>props.theme["base-text"]};

`

export const Negrito=styled.span`

    font-size: 1rem;
    font-weight:bold;
    line-height: 130%;

    color: ${props=>props.theme["base-text"]};

`

export const ContainerTwoCenter=styled.div`

    display:flex;
    justify-content: center;

    margin-top: 35px;

    gap:50px;

`

export const InformacaoEntrega=styled.div`

    padding: 40px;
    width: 526px;
    height: 270px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    /* border: 1px solid; */
    position: relative;


    &::before {
    content: "";
    position: absolute;

    inset: 0;

    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;

    padding: 1px; 

    background:linear-gradient(to right,${props=>props.theme["yellow"]} , ${props=>props.theme["purple"]}); 

    -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
        mask-composite: exclude; 
}
    
    

`

export const Topico=styled.div`

    display: flex;
    align-items: center;
    gap: 0.875rem;
    max-width: 354px;
    
`

export const ContainerSpan=styled.div`

    display: flex;
    flex-direction: column;
    
    gap: 3px;
    
    
    
`


export const DivImgMotoDelivery=styled.div`

    img{
        height: 280px;
    }

`
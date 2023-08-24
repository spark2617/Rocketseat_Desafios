import styled from "styled-components";


export const Container=styled.div`



`


export const MsmSuccess=styled.div`

    display:flex;
    flex-direction: column;
    
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

export const InformacaoEntrega=styled.div`

    padding: 40px;
    width: 526px;
    display: flex;
    flex-direction: column;
    gap: 32px;


    border: 1px solid;
    border-image: linear-gradient(to right,${props=>props.theme["yellow"]} , ${props=>props.theme["purple"]});
    border-image-slice: 1;
    

    border-bottom-left-radius: 36px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;

    
    
    

    

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
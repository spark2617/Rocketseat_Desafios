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

    div{
        display: flex;
        text-align: start;
        max-width: 354px;
    }

`
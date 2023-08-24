import styled from "styled-components";


export const MiniImgCoffe=styled.img`

    width:64px;
    height: 64px;

`

export const Container=styled.div`



    display:flex;
    flex-direction: row;
    justify-content: space-between;

    border-bottom: solid 2px ${props=>props.theme["base-button"]};
    padding-bottom: 24px;
    margin-bottom: 24px;

   
`
export const NameCoffe=styled.span`

    font-size:1rem;
    line-height: 130%;
    font-weight: 400;

    color:${props=>props.theme["base-subtitle"]};
        
    

`

export const PriceCoffe=styled.span`

    font-size:1rem;
    line-height: 130%;
    font-weight: bold;

    color:${props=>props.theme["base-text"]};

`

export const ContainerdoisButton=styled.div`

    display:flex;
    flex-direction: row;
    gap:9px;
    margin-top:8px;


`

export const ButtonRemover=styled.button`


        display: flex;
        justify-content: center;
        align-items: center;
        gap:4px;

        background: ${props=>props.theme["base-button"]};
        color:${props=>props.theme["base-text"]};

        padding:0 12px;
        border: transparent;
        border-radius: 8px;

        font-size:0.875rem;
        line-height: 160%;
        font-weight: 400;

`
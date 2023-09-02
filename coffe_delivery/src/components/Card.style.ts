import styled from "styled-components";


export const CardCoffe = styled.div `

    width: 256px;
    height: 310px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 10px;
    
    border-top-right-radius:36px;
    border-bottom-left-radius: 36px;

    background: ${props => props.theme["base-card"]};

    h2{
        font-size: 1.25rem;
        line-height: 130%;
        font-weight: 700;
        color:${props => props.theme["base-subtitle"]};
    }
    p{
        margin-top: 10px;
        font-size: 0.875rem;
        line-height: 130%;
        font-weight: 400;
        color:${props => props.theme["base-subtitle"]};
    }

`

export const ContainerFinancial = styled.div`

    display:flex;
    flex-direction: row;
    justify-content: center;
    gap: 14px;

    

    margin-top: 25px;


`
export const Real = styled.span`

    font-size: 0.875rem;
    line-height: 130%;
    font-weight: bold;
    color:${props => props.theme["base-label"]};
    margin-right: 3px;

`

export const Price = styled.span`

        font-size: 1.5rem;
        line-height: 130%;
        font-weight: 800;
        color:${props => props.theme["base-text"]};
    
`

export const ButtonShopping = styled.button`

        width:38px;
        height:38px;

        background:${props => props.theme["purple-dark"]};
        color:${props => props.theme["base-card"]};

        display: flex;
        justify-content: center;
        align-items: center;

        border: transparent;
        border-radius:8px;

    
`

export const Buy = styled.div `
    
    display: flex;
    flex-direction: row;
    gap: 10px;

`

export const Categoria = styled.div `
    display: inline;
    background: ${props => props.theme["yellow-light"]};
    color: ${props => props.theme["yellow-dark"]};
    padding: 3px 10px;
    border: transparent;
    border-radius: 10px;
    width: fit-content;

    font-size:0.825rem;
    line-height: 130%;
    font-weight: 500;

    

`

export const ImgCoffe=styled.img `
    height:120px;
    width:120px;
    margin-top:-40px;
    margin-bottom: 20px;

`

export const ContainerCategory=styled.div`

    display:flex;
    flex-direction: row;
    gap:7px;

    margin-bottom: 15px;

`
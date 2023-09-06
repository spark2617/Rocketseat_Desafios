import styled from "styled-components";

interface Grid {
    grid: string;
}

export const ContainerPagDelivery = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;

    margin-top: 30px;


`

export const DivFormEndereco = styled.div`

    padding: 40px;
    width: 640px;
    background: ${props => props.theme["base-card"]};

    color: ${props => props.theme["base-label"]};

    border-radius:8px;

    margin-top: 15px;

    span{
        font-size: 1rem;
        font-weight: 400;
    }

    p{
        font-size: 0.875rem;
        font-weight: 400;  
    }

`

export const FormDelivery = styled.form`
    margin-top: 32px;

    display: grid;
    row-gap: 1rem;
    column-gap: 0.875rem;
    grid-template-rows: repeat(4, 42px);
    grid-template-columns:repeat(28, 1fr) ;
    justify-content: center;


`
export const InputGrid = styled.input<Grid>`
    color: ${props => props.theme["base-label"]};

    grid-area: ${props => props.grid};

    border:1px solid ${props => props.theme["base-button"]};
    background: ${props => props.theme["base-input"]};
    padding: 0.875rem;

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    &:focus{
        outline: transparent;
        box-shadow: 0 0 0 2px ${props => props.theme["yellow-dark"]};
    }

`
export const TitleDiv = styled.div`

    display:flex;
    flex-direction: row;
    gap:8px;

`

export const ContainerPagament = styled.div`
    margin-top: 12px;
    padding: 40px;
    width: 640px;

    background: ${props => props.theme["base-card"]};
    border-radius: 8px;

    

span{
        font-size: 1rem;
        font-weight: 400;
        color: ${props => props.theme["base-subtitle"]};
    }

    p{
        font-size: 0.875rem;
        font-weight: 400;  
        color: ${props => props.theme["base-text"]};
    }

`

export const TresButton = styled.div`
    margin-top: 32px;

    display: flex;
    flex-direction: row;
    justify-content: start;
    gap:12px;


    input[type="radio"]{
        display:none;
    }
    
    input[type="radio"]:checked + label {
        border: 1px solid ${props => props.theme.purple};
    }

    label{
        border:transparent;
        border-radius: 6px;
        padding: 1rem;

        background: ${props => props.theme["base-button"]};
        
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 160%;

        color: ${props => props.theme["base-text"]};

        display: flex;
        align-items: center;
        gap: 5px;
        transition: 0.2s;
        
        &:nth-child(3) {
            flex-grow: 1;
        }
        &:hover{
            background: ${props => props.theme["base-hover"]};
        }

        
    }

`



export const ValueProduct = styled.span`

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme["base-text"]};


`

export const ValueFinal = styled.span`

    font-size: 1.25rem;
    font-weight: bold;
    line-height: 130%;
    color: ${props => props.theme["base-subtitle"]};

`

export const InfoCompre = styled.div`

    display: flex;
    flex-direction:column;
    justify-content: center;

    background: ${props => props.theme["base-card"]};
    border-radius: 8px;
    padding: 40px;
    width:448px;

    margin-top: 15px;




`

export const ButtonConfirmar = styled.button`

height: 46px;
width:100%;

font-size:0.875rem;
font-weight:bold;
line-height:160%;

color:${props => props.theme.white};
background:${props => props.theme.yellow};

border:transparent;
border-radius: 6px;

margin-top: 24px;
transition: 0.2s;

&:hover{
    background:${props => props.theme["yellow-dark"]};
}

`

export const InfoColumn = styled.div`

    display: flex;
    flex-direction:column;
    justify-content: center;
    
    gap: 1rem;


    div{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }

`

export const TitleXS = styled.strong`

        font-size:1.125rem;
        font-weight:bold;
        line-height:130%;

        color:${props => props.theme["base-subtitle"]};

        

`
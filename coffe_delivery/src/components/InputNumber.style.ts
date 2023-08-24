import styled from "styled-components"

export const Container = styled.div `

    width: 72px;
    display: flex;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;

    button{
        width:26px;
        height: 38px;
        border: transparent;
        background:${props => props.theme["base-button"]};
        color: ${props => props.theme.purple};

        display:flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        
    }

    input{
        width:20px;
        height: 38px;
        border:transparent;
        color:${props => props.theme["base-title"]};
        background:${props => props.theme["base-button"]};
        text-align: center;
        font-size: 1rem;
        line-height: 130%;
        font-weight: 400;
        
        -moz-appearance: textfield;
        appearance: textfield;

        &::-webkit-inner-spin-button { 
        -webkit-appearance: none;

        }

    }

`


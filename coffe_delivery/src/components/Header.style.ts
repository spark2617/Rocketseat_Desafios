import styled from "styled-components";

export const HeaderContainer = styled.div`

    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    gap:500px;

    width:100%;
    height: 104px;



`

export const LogoCoffee = styled.img`

    height: 40px;
    width: 85px;

`

export const DivTwoButton = styled.div`

    display: flex;
    flex-direction: row;
    gap: 12px;
    

`


export const ButtonLocation = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    

    background: ${props => props.theme["purple-ligth"]};
    color:${props=> props.theme["purple"]};
    border: transparent;

    height: 38px;

    padding: 0 0.700rem;

    border-radius: 8px;

    span{
        color:${props=> props.theme["purple-dark"]};
    }

`



export const ButtonCar = styled.button`

    background: ${props => props.theme["yellow-light"]};
    border: transparent;

    width: 38px;
    height: 38px;

    border-radius: 8px;


`
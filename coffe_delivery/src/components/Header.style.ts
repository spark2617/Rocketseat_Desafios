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

    position: relative;


`

export const CountItemCar=styled.span`

    position: absolute;

    height: 20px;
    width: 20px;

    background-color: ${props=>props.theme["yellow-dark"]};
    color: ${props=>props.theme.white};

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size:0.875rem;
    font-weight:100;
    line-height:130%;

    top: -8px; 
    right:-8px;

`
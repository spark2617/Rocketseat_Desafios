import styled from "styled-components";


interface CircleProps {
    bg?: string; 
}

export const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 3rem;

    margin-top: 5rem;

    

    h1{
        color:${props => props.theme["base-title"]};
        max-width: 588px;
        line-height: 130%;
        font-size: 3rem;
        font-weight:800;
        margin-bottom: 1rem;
    }
    p{
        color:${props => props.theme["base-subtitle"]};
        max-width: 588px;
        line-height: 130%;
        font-size: 1.25rem;
        font-weight:400;
       
    }


`

export const ContainerIntens = styled.div`

    display: grid;
    grid-template-columns: 231px 294px;
    grid-template-rows: 40px 40px;
    grid-gap: 20px 40px;
    margin-top:3rem;

    div{
        display:flex;
        align-items: center;
        gap:0.700rem;
    }

    p{
        color:${props => props.theme["base-subtitle"]};
        
        line-height: 130%;
        font-size: 1rem;
        font-weight:400;
       
    }



`

export const Circle = styled.span<CircleProps>`


        height: 32px;
        width: 32px;
        /* display: inline-block; */
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;

        background-color:${props => props.bg||"yellow"};


   
`

export const NossosCafe=styled.div`

    margin-top: 128px;

    h2{

        margin-left:118px;
        margin-top: 20px;

        color:${props => props.theme["base-subtitle"]};
        line-height: 130%;
        font-size: 2rem;
        font-weight:800;
    }

`

export const ListCoffe=styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 32px;
    row-gap: 40px;

    

`

export const Centralizar=styled.div`

    display:flex;
    justify-content: center;

    margin-top: 54px;

`
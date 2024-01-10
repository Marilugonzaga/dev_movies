import styled from "styled-components"

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &::before{
        content: '';
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

    }
`

export const Container = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 45%;

    h1{
        font-weight: 900;
        font-size: 4rem;
    }

    p{
        font-size: 1rem;
    }


`

export const Poster = styled.div`
    z-index: 2;

    img{
        height: 30rem;
        border-radius: 20px;
    }

`

export const ContainerButton = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 25px;


`
import styled from 'styled-components'

export const Container = styled.div`
    background: #000000;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 30px;
    max-width: 1200px;

    iframe{
        border: none;
    }

`

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background: rgba(0,0,0, 0.7);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Button = styled.button`
    position: fixed;
    top: 25px;
    left: 50%;
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 20px;
    background: #ff0000;
    color: #ffffff;
    border: 4px solid transparent;
    font-weight: 900;

    &:hover{
        box-shadow: 0px 0px 7px 10px rgba(250, 0, 0, .4);
    }

`
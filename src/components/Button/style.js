import styled, { css } from 'styled-components'

const button = css`
    background: transparent;
    border: 3px solid #ffffff;
    color: #ffffff;
    padding: 15px 20px;
    border-radius: 35px;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    

`


export const ButtonRed = styled.button`
    ${button}

    background: #ff0000;
    color: #ffffff;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 10px rgba(250, 0, 0, .4);
    

    &:hover{
        box-shadow: 0px 0px 7px 13px rgba(250, 0, 0, .4);
    }

`

export const ButtonWhite = styled.button`
    ${button}
    
    &:hover{
        background-color: #ffffff;
        color: #ff0000;
    }

`

export const Container = styled.div`
    display: flex;
    flex-direction: row;

`
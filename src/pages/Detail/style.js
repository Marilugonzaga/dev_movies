import styled, { keyframes } from 'styled-components'

const scale = keyframes`
from{
  transform: scale(0);
}
to{
transform: scale(1);
}
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */
  gap: 50px;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 60vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`

export const Poster = styled.div`
  padding: 20px;
  display: flex;
  /* align-items: flex-start; */
  height: 100%;
  z-index: 99;

  img {
    height: 32rem;
    border-radius: 20px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.8s linear;
  }
`

export const Info = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 99;
  width: 50%;
  h1 {
    color: #fff;
    font-size: 50px;
  }
  p {
    color: #fff;
    max-width: 600px;
    margin: 25px 0;
  }
`
export const ContainerMovies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  iframe {
    border: none;
  }
`

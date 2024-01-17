import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .swiper {
    /* width: 100%;
    height: 100%; */
    display: flex;
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
  }

  .swiper-initialized {
  }

  .swiper-horizontal {
  }
`
export const Background = styled.div`
  background-image: url(${(props) => props.imagem});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.8);
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 100vw;
    height: 100vh;
  }
`

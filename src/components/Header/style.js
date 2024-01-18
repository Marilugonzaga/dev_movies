import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 60px;

  img {
    width: 20%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  padding-right: 50px;
  text-decoration: none;
`

export const Li = styled.li`
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 25px;
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translate(-50%);
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`

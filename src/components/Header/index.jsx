import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Container, Li, Menu } from './style'
import { useState } from 'react'

function Header() {
  const { pathname } = useLocation()
  const [changeBackground, setChangeBackground] = useState(false)

  window.scrollY = () => {
    if (!setChangeBackground && window.pageYOffset > 150) {
      setChangeBackground(true)
    }
    if (setChangeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false)
    }
  }

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo-dev-movies" />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to={'/dev_movies/'}>Home</Link>
        </Li>
        <Li isActive={pathname.includes('filmes')}>
          <Link to={'/dev_movies/filmes'}>Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to={'/dev_movies/series'}>Séries</Link>
        </Li>
      </Menu>
    </Container>
  )
}

export default Header

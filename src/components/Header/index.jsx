import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Container, Li, Menu } from './style'

function Header() {
  const { pathname } = useLocation()

  return (
    <Container>
      <img src={Logo} alt="logo-dev-movies" />
      <Menu>
        <Li isActive={pathname === '/dev_movies/'}>
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

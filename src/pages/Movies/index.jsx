import { useEffect, useState } from 'react'
import Slider from '../../components/Slides'
import {
  getMovieUp,
  getMoviesNow,
  getPopularMovie,
  getSliderMovies,
} from '../../services/getData'
import { Container, Background } from './style'
import SliderAutomatic from '../../components/SlideAutomatic'

function Movie() {
  const [moviesNow, setMoviesNow] = useState()
  const [popularMovies, setPopularMovies] = useState()
  const [topMovies, setTopMovies] = useState()
  const [moviesUp, setMoviesUp] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMoviesNow(),
        getPopularMovie(),
        getSliderMovies(),
        getMovieUp(),
      ])
        .then(([movieNow, popularMovie, topMovie, movieUp]) => {
          setMoviesNow(movieNow),
            setPopularMovies(popularMovie),
            setTopMovies(topMovie),
            setMoviesUp(movieUp)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      <Background>{moviesUp && <SliderAutomatic info={moviesUp} />}</Background>

      <Container>
        {moviesNow && <Slider info={moviesNow} title={'Filme em reprodução'} />}
        {popularMovies && <Slider info={popularMovies} title={'Popular'} />}
        {topMovies && <Slider info={topMovies} title={'Mais votado'} />}
        {moviesUp && <Slider info={moviesUp} title={'Por vir'} />}
      </Container>
    </>
  )
}

export default Movie

import { useState, useEffect } from 'react'
import { Background, Container, ContainerButton, Poster } from './style'
import Button from '../../components/Button'
import Slider from '../../components/Slides'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'
import { useNavigate } from 'react-router-dom'
import {
  getMovie,
  getPopularSeries,
  getSliderMovies,
  getSliderSeries,
} from '../../services/getData'

function Home() {
  const [movie, setMovies] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [showModal, setShowModal] = useState(false)
  const navegate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovie(),
        getSliderMovies(),
        getSliderSeries(),
        getPopularSeries(),
      ])
        .then(([movie, sliderMovies, sliderSeries, popularSeries]) => {
          setMovies(movie)
          setTopMovies(sliderMovies)
          setTopSeries(sliderSeries)
          setPopularSeries(popularSeries)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <ContainerButton>
              <Button
                red
                onClick={() => navegate(`/dev_movies/detalhe/${movie.id}`)}
              >
                Assistir Agora
              </Button>
              <Button onClick={() => setShowModal(true)}>
                Assistir ao Trailer
              </Button>
            </ContainerButton>
          </Container>
          <Poster>
            <img src={getImages(movie.poster_path)} />
          </Poster>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Series'} />}
      {popularSeries && (
        <Slider info={popularSeries} title={'Series Populares'} />
      )}
    </>
  )
}

export default Home

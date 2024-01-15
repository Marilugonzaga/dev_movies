import { useEffect, useState } from 'react'
import { Container, Background, Poster, Info, ContainerMovies } from './style'
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from '../../services/getData'
import { useParams } from 'react-router-dom'
import { getImages } from '../../utils/getImages'
import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'
import Slider from '../../components/Slides'

function Detail() {
  const { id } = useParams()

  const [movie, setMovie] = useState()
  const [movieSimilar, setMovieSimilar] = useState()
  const [movieCredits, setMovieCredits] = useState()
  const [movieVideos, setMovieVideos] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovieById(id),
        getMovieSimilar(id),
        getMovieCredits(id),
        getMovieVideos(id),
      ])
        .then(([movie, similar, credits, videos]) => {
          setMovie(movie)
          setMovieSimilar(similar)
          setMovieCredits(credits)
          setMovieVideos(videos)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Poster>
              <img src={getImages(movie.poster_path)} />
            </Poster>
            <Info>
              <h1>{movie.title}</h1>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos && (
              <div key={movieVideos.id}>
                <h4>{movieVideos.name}</h4>
                <iframe
                  src={`https://www.youtube.com/embed/${movieVideos.key}`}
                  title="YouTube video player"
                  height="500px"
                  width="100%"
                ></iframe>
              </div>
            )}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title={'Filmes Similares'} />
          )}
        </>
      )}
    </>
  )
}

export default Detail

import { useEffect, useState } from 'react'
import { Container, Background } from './style'
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from '../../services/getData'
import { useParams } from 'react-router-dom'
import { getImages } from '../../utils/getImages'

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
          console.log({ movie, similar, credits, videos })
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
      {movie && <Background image={getImages(movie.backdrop_path)} />}
      <Container>
        <h1>Detalhes</h1>
      </Container>
    </>
  )
}

export default Detail

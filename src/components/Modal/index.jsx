import { useEffect, useState } from 'react'
import { Container, Background, Button } from './style'
import { getMovieVideos } from '../../services/getData'

function Modal({ movieId, setShowModal }) {
  const [movies, setMovies] = useState()

  useEffect(() => {
    async function getMovies() {
      setMovies(await getMovieVideos(movieId))
    }

    getMovies()
  }, [])
  return (
    <Background onClick={() => setShowModal(false)}>
      <Button onClick={() => setShowModal(false)}>X</Button>
      {movies && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movies.key}`}
            title="YouTube video player"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
      )}
    </Background>
  )
}

export default Modal

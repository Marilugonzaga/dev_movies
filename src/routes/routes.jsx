import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Series from '../pages/Series'
import Movies from '../pages/Movies'
import Detail from '../pages/Detail'

function Router() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/dev_movies/" />
        <Route element={<Series />} path="/dev_movies/series" />
        <Route element={<Movies />} path="/dev_movies/filmes" />
        <Route element={<Detail />} path="/dev_movies/detalhe/:id" />
      </Routes>
    </>
  )
}

export default Router

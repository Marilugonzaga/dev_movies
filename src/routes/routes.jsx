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
        <Route element={<Series />} path="/series" />
        <Route element={<Movies />} path="/filmes" />
        <Route element={<Detail />} path="/detalhe/:id" />
      </Routes>
    </>
  )
}

export default Router

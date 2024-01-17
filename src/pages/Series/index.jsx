import { useEffect, useState } from 'react'
import Slider from '../../components/Slides'
import {
  getPopularSeries,
  getSeriesOn,
  getSeriesToDay,
  getSliderSeries,
} from '../../services/getData'
import { Container, Background } from './style'
import SliderAutomatic from '../../components/SlideAutomatic'

function Series() {
  const [seriesOn, setSeriesOn] = useState()
  const [seriesToDay, setSeriesToDay] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topSeries, setTopSeries] = useState()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getSeriesOn(),
        getSeriesToDay(),
        getPopularSeries(),
        getSliderSeries(),
      ])

        .then(([serieOn, serieToDay, popularSerie, topSerie]) => {
          setSeriesOn(serieOn),
            setSeriesToDay(serieToDay),
            setPopularSeries(popularSerie),
            setTopSeries(topSerie)
        })
        .catch((error) => console.error(error))
    }

    getAllData()
  }, [])
  return (
    <>
      <Background>
        {popularSeries && <SliderAutomatic info={popularSeries} />}
      </Background>
      <Container>
        {seriesOn && <Slider info={seriesOn} title={'No ar'} />}
        {seriesToDay && <Slider info={seriesToDay} title={'Exibindo hoje'} />}
        {popularSeries && <Slider info={popularSeries} title={'Popular'} />}
        {topSeries && <Slider info={topSeries} title={'Mais votado'} />}
      </Container>
    </>
  )
}

export default Series

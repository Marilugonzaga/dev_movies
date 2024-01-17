import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { getImages } from '../../utils/getImages'
import { Container, Background } from './style'

function SliderAutomatic({ info }) {
  return (
    <Container>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Background imagem={getImages(item.backdrop_path)}></Background>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default SliderAutomatic

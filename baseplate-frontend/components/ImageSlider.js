import { DeliveryBanner } from '../components/DeliveryBanner';
// import Swiper core and required modules

import { Pagination, Autoplay, EffectFade } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { HomepageSlider } from './styles/SwiperStyles';

// Images
import Image from 'next/image';
import home4 from '../public/img/sliderimgs/homeSliderImg1L.jpg';
import home6 from '../public/img/sliderimgs/homeSliderImg2L.jpg';
import home2 from '../public/img/sliderimgs/homeSliderImg4L.jpg';
import home1 from '../public/img/sliderimgs/homeSliderImg6L.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const ImageSlider = () => {
  return (
    <>
      <HomepageSlider
        modules={[Pagination, EffectFade, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop
      >
        <SwiperSlide>
          <div className="slide-container-for-header">
            <div className="img-container" style={{ width: '100%' }}>
              <Image src={home1} />
            </div>
            <figcaption className="slide-heading-and-button">
              <h2>
                Summer Collection
                <br />
                2021
              </h2>
              <button type="button">Shop Now</button>
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container-for-header">
            <div className="img-container" style={{ width: '100%' }}>
              <Image src={home2} />
            </div>
            <figcaption className="slide-heading-and-button">
              <h2>
                Stussy
                <br />
                10.21 Collection
              </h2>
              <button type="button">Shop Now</button>
            </figcaption>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-container-for-header">
            <div className="img-container" style={{ width: '100%' }}>
              <Image src={home4} />
            </div>
            <figcaption className="slide-heading-and-button">
              <h2>
                Skateboards
                <br />
              </h2>
              <button type="button">Shop Now</button>
            </figcaption>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-container-for-header">
            <div className="img-container" style={{ width: '100%' }}>
              <Image src={home6} />
            </div>
            <figcaption className="slide-heading-and-button">
              <h2>
                Nike SB
                <br />
              </h2>
              <button type="button">Shop Now</button>
            </figcaption>
          </div>
        </SwiperSlide>
      </HomepageSlider>
      <DeliveryBanner />
    </>
  );
};

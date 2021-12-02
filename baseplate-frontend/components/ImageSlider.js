import { DeliveryBanner } from '../components/DeliveryBanner';
// import Swiper core and required modules

import { Pagination, Autoplay, EffectFade } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { HomepageSlider } from './styles/SwiperStyles';

// Images
import Image from 'next/image';
import home1 from '../public/img/sliderimgs/homeSliderImg1L.jpg';
import home2 from '../public/img/sliderimgs/homeSliderImg2L.jpg';
import home3 from '../public/img/sliderimgs/homeSliderImg3L.jpg';
import home4 from '../public/img/sliderimgs/homeSliderImg4L.jpg';

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
      >
        <SwiperSlide>
          <div className="img-container">
            <Image src={home1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <Image src={home2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <Image src={home3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <Image src={home4} />
          </div>
        </SwiperSlide>
      </HomepageSlider>
      <DeliveryBanner />
    </>
  );
};

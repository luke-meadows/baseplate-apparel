import { DeliveryBanner } from '../components/DeliveryBanner';
// import Swiper core and required modules
import { Pagination } from 'swiper';
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

export const ImageSlider = () => {
  return (
    <>
      <HomepageSlider
        // install Swiper modules
        // TODO auto transition
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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

import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const HomepageSlider = styled(Swiper)`
  line-height: 0;

  .swiper-slide {
    color: green;
  }

  .swiper-pagination-bullet {
    background-color: white !important;
  }

  .swiper-pagination-bullet-active {
    background-color: #02e1f5 !important;
    color: rgba(0, 0, 0, 0.666);
  }

  img {
    filter: brightness(60%);
    @media screen and (max-width: 700px) {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
`;

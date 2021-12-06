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
    filter: brightness(45%);
    @media screen and (max-width: 700px) {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
  .slide-heading-and-button {
    position: absolute;
    left: 50%;
    top: 50%;
    text-shadow: 1px 1px #00000020;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    color: gainsboro;

    h3 {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: 300;
      color: gainsboro;
    }
    h2 {
      margin: 2.5rem 0;
      font-family: 'Lexend', sans-serif;
      font-size: 4rem;
      font-weight: 400;
      line-height: 1.2;
      &:hover {
        color: #02e1f5;
        cursor: pointer;
      }
    }
  }
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeader = styled.header`
  width: 100%;
  color: white;
  z-index: 2;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.88);
  height: 6rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--medium-screen-padding);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  a {
    font-family: 'Caveat';
    color: white;
    font-weight: 400;
    font-size: 3rem;
    /* @media screen and (max-width: 1160px) {
    font-size: 2rem;
  }
  /* @media screen and (max-width: 1160px) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);*/
  }
`;

export const StyledNav = styled.nav`
  overflow-x: hidden;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 6rem;
  border: 1px solid red;

  /* @media screen and (max-width: 1160px) {
    flex-direction: column;
    height: 70%;
    width: 100%;
  }

  @media screen and (max-width: 1160px) {
    position: absolute;
    top: 4rem;
    left: 0;
    height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
    width: 100vw;
    background-color: white;
  } */
  svg {
    position: absolute;
    bottom: 0;
    opacity: 0;
    transform: translateX(-50%);
    pointer-events: none;
    transition: left 0.1s ease;
  }
  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    height: 100%;
    width: 100%;
    padding: 0 2rem;
    color: white;
    /* @media screen and (max-width: 1160px) {
        text-align: left;
        justify-content: flex-start;
        font-size: 1.8rem;
        font-weight: 300;
        width: 10rem;
        color: black;
      } */
  }
`;

export const StyledSubNav = styled(motion.div)`
  background: var(--main-blue);
  width: 100vw;
  position: absolute;
  left: 0;
  top: 6rem;
  border: 1px solid red;
`;

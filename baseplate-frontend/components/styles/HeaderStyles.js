import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeader = styled(motion.header)`
  width: 100%;
  color: white;
  z-index: 2;
  position: fixed;
  top: 0;
  background-color: var(--Transparent-black);
  height: 6rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 6rem;
  .box-shadow {
    box-shadow: 0 6px 5px 1px rgba(11, 11, 11, 0.323);
  }
`;

export const Logo = styled.div`
  a {
    font-family: 'Caveat';
    font-size: 3rem;
  }
  a:hover {
    color: var(--main-blue);
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 6rem;
  overflow: hidden;

  > * {
    &:nth-last-child(1) {
      ::after {
        content: '';
      }
    }
  }
  svg {
    position: absolute;
    bottom: 0;
    opacity: 0;
    transform: translateX(-50%);
    pointer-events: none;
    transition: left 0.1s ease;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    height: 100%;
    padding: 0 3.5rem;
    position: relative;
    font-weight: 300;
    ::after {
      content: '|';
      position: absolute;
      color: rgb(65, 65, 65);
      font-weight: 300;
      right: 0px;
    }
  }
`;

export const IconContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  align-items: center;
  right: 6rem;
`;

export const StyledSubNav = styled(motion.div)`
  background: var(--main-blue);
  width: 100vw;
  position: absolute;
  left: 0;
  top: 6rem;
  color: black;
  padding: 0 25vw;
  z-index: 1;
  .bottom-header {
    line-height: 0;
    padding: 3rem 0 3.3rem 0;
    margin: 0;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-family: 'Poppins';
    a {
      color: rgba(0, 0, 0, 0.8);
      font-weight: 300;
    }
    a:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  svg {
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-50%, -80%);
    height: 2rem;
    width: 2rem;
    fill: #02e1f5;
    opacity: 0.8;
  }
`;
export const SubNavHeader = styled.h5`
  font-size: 1.8rem;
  font-weight: 300;
  text-transform: capitalize;
  line-height: 0;
  padding: 3.3rem 0 3rem 0;
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
`;
export const SubNavList = styled(motion.ul)`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 2rem 0;
  li {
    padding: 0.5rem 0;
    line-height: 1;
    a {
      font-size: 1.4rem;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.8);
      &:hover {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const Placeholder = styled.div`
  width: 9rem;
`;

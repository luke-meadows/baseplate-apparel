import styled from 'styled-components';

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
  } */
  }
  /* @media screen and (max-width: 1160px) {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
} */
`;

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* font-family: 'Caveat', cursive;
  font-family: 'Poppins', sans-serif;
  font-family: 'Roboto Mono', monospace; */

  html {
    --main-blue: #02e1f5;
    --Transparent-black: rgba(0, 0, 0, 0.8);
    --large-screen-padding: 6rem;
    --medium-screen-padding: 6rem 6rem 0 6rem;
    --mobile-screen-padding: 1rem;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 62.5%;
    padding: 0;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins';
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
    scroll-behavior: smooth;
  }
  
  a {
    text-decoration: none;
    color: var(--black);
    cursor: pointer;
  }
  li{
    list-style: none;
  }

  button{
    border: none;
    font-size: 1.1rem;
    outline: none;
    width: 10rem;
    height: 3rem;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);

    &:hover,
    &:focus{
        background-color: #02e1f5;
        cursor: pointer;
    }
}
.search, .cart{
  span{

    margin: 0 1rem;
  }
}
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
 display: none;
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
}

#nprogress .spinner-icon {
  width: 50px;
  height: 50px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: var(--main-blue);
  border-left-color: var(--main-blue);
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export const InnerStyles = styled.div`
  max-width: 1450px;
  margin: auto;
`;

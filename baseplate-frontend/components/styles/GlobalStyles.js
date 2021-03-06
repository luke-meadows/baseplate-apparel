import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* font-family: 'Caveat', cursive;
  font-family: 'Poppins', sans-serif;
  font-family: 'Roboto Mono', monospace; */

  html {
    --main-blue: #02e1f5;
    --Transparent-black: rgba(0, 0, 0, 0.8);
    --large-screen-padding: 6rem;
    --medium-screen-padding: 6rem 6rem;
    --mobile-screen-padding: 1rem;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --max-width: 1720px;
    box-sizing: border-box;
    font-size: 70.5%;
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
.page-disabled {
    filter: blur(5px);
  }
`;

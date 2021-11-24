import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 @font-face {
    font-family: 'poppins';
    src: url('public/fonts/Poppins-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
  }
html {
    --main-blue: #02e1f5;
    --large-screen-padding: 6rem;
    --medium-screen-padding: 3rem;
    --mobile-screen-padding: 1rem;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: poppins;
    padding: 0;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(--black);
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  button{
    border: none;
    font-size: 0.85rem;
    outline: none;
    width: 8rem;
    height: 2rem;
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
`;

export const InnerStyles = styled.div`
  padding: var(--medium-screen-padding);

  border: 1px solid blue;
`;

import styled from 'styled-components';
export const ProductsPage = styled.div`
  margin: 6rem auto 0rem auto;
  padding: var(--medium-screen-padding);
  max-width: 1550px;
  .slash {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 200;
    font-size: 1.5rem;
  }
`;
export const ProductsPageHeading = styled.div`
  h4 {
    font-size: 1.8rem;
    font-weight: 300;
    text-transform: capitalize;
    color: black;
  }
  max-width: 1550px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomPagination = styled.div`
  margin: 3rem auto;
  display: flex;
  justify-content: center;
`;

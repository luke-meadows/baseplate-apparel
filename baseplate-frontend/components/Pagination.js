import styled from 'styled-components';
import Link from 'next/link';
export default function Pagination({ totalPages, currentPage }) {
  return (
    <PaginationStyles>
      <Link href="/">&#8592; Prev</Link>
      <figcaption>
        Page {currentPage} of {totalPages}
      </figcaption>
      <Link href="/">Next &#8594;</Link>
    </PaginationStyles>
  );
}

const PaginationStyles = styled.div`
  display: flex;
  border-radius: 0.5rem;
  color: rgba(0, 0, 0, 0.7);
  font-size: 1rem;
  * {
    padding: 0 1rem;
  }
  *:first-child,
  *:last-child {
    :hover {
      color: var(--main-blue);
    }
  }
`;

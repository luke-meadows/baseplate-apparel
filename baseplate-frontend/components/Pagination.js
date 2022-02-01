import Head from 'next/head';
import styled from 'styled-components';
export default function Pagination({
  totalPages,
  currentPage,
  updateCurrentPage,
}) {
  function handleNext(e) {
    e.currentTarget.blur();
    e.preventDefault();
    if (currentPage === totalPages) return;
    updateCurrentPage(currentPage + 1);
    return;
  }
  function handlePrev(e) {
    e.currentTarget.blur();
    e.preventDefault();
    if (currentPage <= 1) return;
    updateCurrentPage(currentPage - 1);
    return;
  }
  if (totalPages === 1 || totalPages === 0) return <></>;
  return (
    <PaginationStyles>
      <Head>
        <title>Baseplate | Page {currentPage}</title>
      </Head>
      <button type="button" onClick={handlePrev} disabled={currentPage === 1}>
        &#8592; Prev
      </button>
      <figcaption>
        Page {currentPage} of {totalPages}
      </figcaption>
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next &#8594;
      </button>
    </PaginationStyles>
  );
}

const PaginationStyles = styled.div`
  margin: 3rem auto -3rem auto;
  display: flex;
  border-radius: 0.5rem;
  color: rgba(0, 0, 0, 0.7);
  align-items: center;
  * {
    font-size: 1.2rem;
  }

  button {
    text-transform: capitalize;
    background: none;
    color: rgba(0, 0, 0, 0.7);

    &:hover,
    &:focus {
      color: var(--main-blue);
      background: none;
    }
    &:disabled {
      color: rgba(0, 0, 0, 0.2);
    }
  }
`;

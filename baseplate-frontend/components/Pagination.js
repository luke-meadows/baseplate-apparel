import styled from 'styled-components';
export default function Pagination({
  totalPages,
  currentPage,
  updateCurrentPage,
}) {
  function handleNext(e) {
    e.preventDefault();
    if (currentPage === totalPages) return;
    updateCurrentPage(currentPage + 1);
    e.target.blur();
    return;
  }
  function handlePrev(e) {
    e.preventDefault();
    if (currentPage <= 1) return;
    updateCurrentPage(currentPage - 1);
    e.target.blur();
    return;
  }

  return (
    <PaginationStyles>
      <button type="button" onClick={handlePrev}>
        &#8592; Prev
      </button>
      <figcaption>
        Page {currentPage} of {totalPages}
      </figcaption>
      <button type="button" onClick={handleNext}>
        Next &#8594;
      </button>
    </PaginationStyles>
  );
}

const PaginationStyles = styled.div`
  display: flex;
  border-radius: 0.5rem;
  color: rgba(0, 0, 0, 0.7);
  align-items: center;
  * {
    font-size: 1rem;
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
  }
`;

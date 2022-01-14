import { useRouter } from 'next/dist/client/router';
import getFilterOptions from '../lib/getFilterOptions';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function ProductsFilter({ query, filterOptions, page }) {
  const [showFilters, updateShowFilters] = useState(false);
  const router = useRouter();
  const [queryParams, updateQueryParams] = useState({ ...query });

  function handleFilterChange(e) {
    e.preventDefault();
    e.target.blur();

    // removes filter if 'all' selected
    if (e.target.value === 'all') {
      const newQuery = query;
      delete newQuery[e.target.name];
      updateQueryParams(newQuery);
      e.target.selectedIndex = 0;
      return;
    }
    // adds query to respective key in params
    const newQuery = e.currentTarget[e.target.name].value;
    updateQueryParams({ ...queryParams, [e.target.name]: newQuery });
  }
  useEffect(() => {
    // changes page url on query param change, triggering refetch of products
    router.push({
      pathname: `/${page}/[id]`,
      query: queryParams,
    });
  }, [queryParams]);

  function clearFilter(e) {
    e.preventDefault();
    updateQueryParams({ id: query.id });
  }

  // a list of possible filter options for current selection of products
  const options = getFilterOptions(filterOptions);

  return (
    <StyledProductsFilter>
      <button onClick={() => updateShowFilters(!showFilters)}>Filter</button>
      {showFilters && (
        <form action="submit" onChange={handleFilterChange}>
          <select name="brand" id="" defaultValue={'default'}>
            <option value="default" disabled>
              {query.brand || 'Brand'}
            </option>
            <option value="all">All</option>
            {options.brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <select name="type" id="" defaultValue={'default'}>
            <option value="default" disabled>
              {query.type || 'Product Type'}
            </option>
            <option value="all">All</option>
            {options.types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <select name="color" id="" defaultValue={'default'}>
            <option value="default" disabled>
              {query.color || 'Color'}
            </option>
            <option value="all">All</option>
            {options.colors.sort().map((color) => (
              <option key={color}>{color}</option>
            ))}
          </select>
          <button onClick={clearFilter}>reset</button>
        </form>
      )}
    </StyledProductsFilter>
  );
}

const StyledProductsFilter = styled.div`
  margin-bottom: 1.5rem;
  select {
    font-size: 1.1rem;
    margin: 0 0.5rem 0 0;
    padding: 0.5rem 2rem;
    border: none;
    text-align: center;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    color: #515151;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; /* Remove default arrow */
    &:hover,
    &:focus {
      background-color: #02e1f5;
      cursor: pointer;
      border: 1px solid var(--main-blue);
    }
  }

  form {
    button {
      padding: 0.5rem 2rem;
    }
  }

  button {
    font-size: 1.1rem;
    margin: 0 0.5rem 0 0;
    background: none;
    height: initial;
    width: initial;
    color: #515151;
    :focus {
      background: none;
    }
    :hover {
      color: var(--main-blue);
      background: none;
    }
  }
`;

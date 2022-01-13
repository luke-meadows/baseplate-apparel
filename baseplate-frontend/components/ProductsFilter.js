import { useRouter } from 'next/dist/client/router';
import getFilterOptions from '../lib/getFilterOptions';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function ProductsFilter({ query, filterOptions, page }) {
  const router = useRouter();
  const [queryParams, updateQueryParams] = useState({ ...query });
  function handleFilterChange(e) {
    e.preventDefault();
    const newQuery = e.currentTarget[e.target.name].value;
    updateQueryParams({ ...queryParams, [e.target.name]: newQuery });
    // const brand = e.currentTarget.brands.value;
    // const type = e.currentTarget.types.value;
    // const color = e.currentTarget.colors.value;
  }
  useEffect(() => {
    console.log(queryParams);
    router.push({
      pathname: `/${page}/[id]`,
      query: queryParams,
    });
  }, [queryParams]);

  function clearFilter(e) {
    e.preventDefault();
    updateQueryParams({ id: query.id });
  }
  function deleteFilter() {
    delete Employee.firstname;
  }
  const options = getFilterOptions(filterOptions);

  return (
    <StyledProductsFilter>
      <form action="submit" onChange={handleFilterChange}>
        <select name="brand" id="" defaultValue={'default'}>
          <label htmlFor="brands">All</label>
          <option value="default" disabled>
            Brand
          </option>
          <option onClick={deleteFilter}>All</option>
          {options.brands.map((brand) => (
            <option key={brand}>{brand}</option>
          ))}
        </select>
        <select name="type" id="" defaultValue={'default'}>
          <option value="default" disabled>
            Product Type
          </option>
          {options.types.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        <select name="color" id="" defaultValue={'default'}>
          <option value="default" disabled>
            Color
          </option>
          {options.colors.sort().map((color) => (
            <option key={color}>{color}</option>
          ))}
        </select>
        <button onClick={clearFilter}>reset</button>
      </form>
    </StyledProductsFilter>
  );
}

const StyledProductsFilter = styled.div`
  margin-bottom: 0.5rem;
  select {
    font-size: 1rem;
    margin: 0 0.5rem 0 0;
    padding: 0.5rem 2rem;
    border: none;
    text-align: center;
    outline: none;
    border: 1px solid #515151;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.8);
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

  button {
    font-size: 1rem;
    margin: 0 0.5rem 0 0;
    padding: 0.5rem 2rem;
    background: none;
    height: initial;
    width: initial;
    :hover {
      color: var(--main-blue);
      background: none;
    }
  }
`;

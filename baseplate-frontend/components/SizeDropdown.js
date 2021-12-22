import styled from 'styled-components';
export default function SizeDropdown() {
  return (
    <Dropdown>
      <span class="material-icons-outlined">expand_more</span>
      <option>Dropdown</option>
    </Dropdown>
  );
}

const Dropdown = styled.select`
  position: relative;
  font-size: 1.2rem;
  display: block;
  margin: 1rem 0;
  height: 4rem;
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  background: #c8c8c8;
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
  }
  span {
    left: 10px;
    top: 5px;
  }
`;

import styled from 'styled-components';

export default function SearchBar() {
  return (
    <Outer>
      <Bar>
        <span className="material-icons">search</span>
        <input type="text" placeholder="search"></input>
      </Bar>
    </Outer>
  );
}

const Bar = styled.div`
  color: white;
  background: var(--Transparent-black);
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  width: 50rem;
  position: absolute;
  top: 2rem;
  right: 50%;
  transform: translateX(50%);
  z-index: 2;
  input {
    background: none;
    outline: none;
    border: none;
    font-size: 2rem;
    color: white;
    padding-left: 1rem;
    font-family: 'Poppins';
  }
`;

const Outer = styled.div`
  z-index: 2;
  position: absolute;
  height: calc(100vh - 6rem);
  width: 100vw;
  top: 6rem;
  background: #02e1f584;
  background: #02e1f5a3;
`;

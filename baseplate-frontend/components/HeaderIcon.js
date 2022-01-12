import styled from 'styled-components';
export default function HeaderIcon({ iconName, iconActive, setIconActive }) {
  return (
    <Icon>
      <span
        onClick={() => {
          setIconActive(!iconActive);
        }}
        className={iconActive ? 'blue material-icons' : 'material-icons'}
      >
        {iconName}
      </span>
    </Icon>
  );
}

const Icon = styled.div`
  display: flex;
  align-items: center;
  span {
    fontsize: 2rem;
    cursor: pointer;
    margin: 0 1rem;
  }
  .blue {
    color: var(--main-blue);
  }
`;

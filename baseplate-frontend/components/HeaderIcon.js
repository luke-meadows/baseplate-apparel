import { useContext } from 'react';
import styled from 'styled-components';
import { NavCtx } from '../lib/NavCtxProvider';
export default function HeaderIcon({ iconName, iconActive, setIconActive }) {
  const { setScrollTop, setStopScrolling, stopScrolling } = useContext(NavCtx);
  return (
    <Icon
      onClick={(e) => {
        setIconActive(!iconActive);
        setStopScrolling(!stopScrolling);
      }}
    >
      <span className={iconActive ? 'blue material-icons' : 'material-icons'}>
        {iconName}
      </span>
    </Icon>
  );
}

const Icon = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  span {
    fontsize: 2rem;
    cursor: pointer;
    margin: 0 1rem;
  }
  .blue {
    color: var(--main-blue);
  }
`;

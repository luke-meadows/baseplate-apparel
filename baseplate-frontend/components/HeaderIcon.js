import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { NavCtx } from '../lib/NavCtxProvider';
export default function HeaderIcon({ iconName, iconActive, setIconActive }) {
  const { setStopScrolling, stopScrolling } = useContext(NavCtx);
  return (
    <Icon
      layout
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

const Icon = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 6rem;
  overflow: hidden;
  cursor: pointer;
  span {
    fontsize: 2rem;
    margin: 0 1rem;
  }
  .blue {
    color: var(--main-blue);
  }
`;

import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { NavCtx } from '../lib/NavCtxProvider';
export default function HeaderIcon({
  iconName,
  iconActive,
  setIconActive,
  quantity,
  otherIconActive,
}) {
  const { setStopScrolling, stopScrolling } = useContext(NavCtx);
  return (
    <Icon
      onClick={(e) => {
        setIconActive(!iconActive);
        if (!otherIconActive) {
          setStopScrolling(!stopScrolling);
        }
      }}
    >
      <span className={iconActive ? 'blue material-icons' : 'material-icons'}>
        {iconName}
      </span>
      {quantity && (
        <CartItemsQuantity>{`+${quantity.length}`}</CartItemsQuantity>
      )}
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
    margin: 0 0rem 0 2rem;
  }
  .blue {
    color: var(--main-blue);
  }
`;

const CartItemsQuantity = styled.p`
  color: var(--main-blue);
  font-family: 'Poppins';
  font-size: 1.2rem;
`;

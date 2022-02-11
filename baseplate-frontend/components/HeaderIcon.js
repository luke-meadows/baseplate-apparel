import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/CtxProvider';

export default function HeaderIcon({
  iconName,
  iconActive,
  setIconActive,
  quantity,
}) {
  const { setStopScrolling, closeAllHeaderIcons } = useContext(Ctx);

  function handleIconClick() {
    if (iconActive) {
      setIconActive(false);
      setStopScrolling(false);
      return;
    }
    closeAllHeaderIcons();
    setIconActive(true);
    setStopScrolling(true);
  }
  return (
    <Icon onClick={handleIconClick}>
      <span className={iconActive ? 'blue material-icons' : 'material-icons'}>
        {iconName}
      </span>
      {quantity > 0 && <CartItemsQuantity>{`+${quantity}`}</CartItemsQuantity>}
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
    margin: 0 1rem 0 1rem;
  }
  .blue {
    color: var(--main-blue);
  }
`;

const CartItemsQuantity = styled.p`
  color: var(--main-blue);
  font-family: 'Poppins';
  font-size: 1.2rem;
  margin-left: -1rem;
`;

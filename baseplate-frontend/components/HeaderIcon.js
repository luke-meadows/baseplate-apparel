import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { Ctx } from '../lib/CtxProvider';
export default function HeaderIcon({
  iconName,
  iconActive,
  setIconActive,
  quantity,
  otherIconActive,
}) {
  const {
    setCartActive,
    setStopScrolling,
    stopScrolling,
    setSearchActive,
    setAccountActive,
  } = useContext(Ctx);
  function handleIconClick() {
    setIconActive(!iconActive);
    if (iconName === 'person') {
      setCartActive(false);
      setSearchActive(false);
    } else {
      setAccountActive(false);
    }
    if (!otherIconActive) {
      setStopScrolling(!stopScrolling);
    }
  }
  return (
    <Icon onClick={handleIconClick}>
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

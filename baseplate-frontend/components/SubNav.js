import { forwardRef, useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NavCtx } from '../lib/NavCtxProvider';
import { StyledSubNav } from './styles/HeaderStyles';

export const SubNav = forwardRef((props, ref) => {
  const { subNavOptions, handleMouseEnter, handleMouseLeave } =
    useContext(NavCtx);

  return (
    <StyledSubNav
      layout
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {subNavOptions.subNavOpen ? props.children : ''}
    </StyledSubNav>
  );
});

import { forwardRef, useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NavCtx } from '../public/NavCtxProvider';
import { wait } from './lib/wait';
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
      <motion.h1 layout>click</motion.h1>
      {subNavOptions.subNavOpen ? props.children : ''}
      <div className="faq-line"></div>
    </StyledSubNav>
  );
});

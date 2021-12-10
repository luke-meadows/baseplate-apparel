import { forwardRef, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { NavCtx } from '../lib/NavCtxProvider';
import { StyledSubNav, SubNavHeader, SubNavList } from './styles/HeaderStyles';
import { motion } from 'framer-motion';
import { animateOptions, animateSubNav } from '../lib/subNavAnimations';
import NavTriangle from './NavTriangle';

export const SubNav = forwardRef((props, ref) => {
  const { subNavOptions, handleMouseLeave, navCategories } = useContext(NavCtx);
  const [variant, setVariant] = useState('hidden');

  useEffect(() => {
    if (subNavOptions.subNavOpen) {
      setVariant('animate');
    } else {
      setVariant('hidden');
    }
  }, [subNavOptions.subNavOpen]);

  const activeOptions = // Gets the list of subnav data based on what nav item is hovered
    navCategories[subNavOptions.activeNavHeading] || navCategories.brands;
  return (
    <StyledSubNav
      className={subNavOptions.subNavOpen ? 'box-shadow' : ''}
      variants={animateSubNav}
      initial="initial"
      animate="animate"
      layout
      ref={ref}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        variants={animateOptions}
        initial="initial"
        animate={variant}
        layout
      >
        {subNavOptions.subNavOpen && (
          <motion.div layout>
            <SubNavHeader layout>{subNavOptions.activeNavHeading}</SubNavHeader>
            <SubNavList>
              {activeOptions.sort().map((option) => {
                return (
                  <li key={option}>
                    <Link href="/">{option}</Link>
                  </li>
                );
              })}
            </SubNavList>
            <motion.h5 className="bottom-header ">
              <Link href="/">View All</Link>
            </motion.h5>
          </motion.div>
        )}
      </motion.div>
      {subNavOptions.subNavOpen && (
        <NavTriangle coords={subNavOptions.navTriangleCoords} />
      )}
    </StyledSubNav>
  );
});

import { forwardRef, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { NavCtx } from '../lib/NavCtxProvider';
import { StyledSubNav, SubNavHeader, SubNavList } from './styles/HeaderStyles';
import { motion } from 'framer-motion';
import { animateOptions, animateSubNav } from '../lib/subNavAnimations';

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
      <motion.div variants={animateOptions} initial="initial" animate={variant}>
        {subNavOptions.subNavOpen && (
          <div layout="true">
            <SubNavHeader>{subNavOptions.activeNavHeading}</SubNavHeader>
            <SubNavList>
              {activeOptions.sort().map((option) => {
                return (
                  <li key={option}>
                    <Link href="/">{option}</Link>
                  </li>
                );
              })}
            </SubNavList>
            <h5 className="bottom-header ">
              <Link href="/">View All</Link>
            </h5>
            <svg
              viewBox="0 0 100 100"
              style={{ left: subNavOptions.navTriangleCoords || 0 }}
            >
              <polygon points="50 15, 100 100, 0 100" />
            </svg>
          </div>
        )}
      </motion.div>
    </StyledSubNav>
  );
});

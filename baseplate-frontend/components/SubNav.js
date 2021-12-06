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
  console.log(subNavOptions.activeNavHeading);

  return (
    <StyledSubNav
      variants={animateSubNav}
      initial="initial"
      animate="animate"
      layout
      ref={ref}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        // layout
        variants={animateOptions}
        initial="initial"
        animate={variant}
      >
        {subNavOptions.subNavOpen && (
          <div layout="true">
            <SubNavHeader>{subNavOptions.activeNavHeading}</SubNavHeader>
            <SubNavList>
              {activeOptions.sort().map((option) => {
                return (
                  <li>
                    <Link href="/">{option}</Link>
                  </li>
                );
              })}
            </SubNavList>
            <h5 className="bottom-header ">
              <Link href="/">View All</Link>
            </h5>
          </div>
        )}
      </motion.div>
    </StyledSubNav>
  );
});

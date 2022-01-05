import { forwardRef, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { NavCtx } from '../lib/NavCtxProvider';
import { StyledSubNav, SubNavHeader, SubNavList } from './styles/HeaderStyles';
import { motion } from 'framer-motion';
import { animateOptions } from '../lib/subNavAnimations';
import NavTriangle from './NavTriangle';

export const SubNav = forwardRef((props, ref) => {
  const { subNavOptions, handleMouseLeave, navCategories, setSubNavOptions } =
    useContext(NavCtx);
  const [variant, setVariant] = useState();

  const slugs = {
    // these are the query parameters passed through to the product page to filter options
    brands: `/products/brands?brand=`,
    shoes: `/products/shoes?brand=`,
    clothing: `/products/clothes?category=`,
  };

  useEffect(() => {
    if (subNavOptions.subNavOpen) {
      setVariant('animate');
    } else {
      setVariant('hidden');
    }
  }, [subNavOptions.subNavOpen]);

  function handleClick() {
    setSubNavOptions({ ...subNavOptions, subNavOpen: false });
  }

  const activeOptions = // Gets the list of subnav data based on what nav item is hovered
    navCategories[subNavOptions.activeNavHeading] || navCategories.brands;

  return (
    <StyledSubNav
      className={subNavOptions.subNavOpen ? 'box-shadow' : ''}
      layout
      ref={ref}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div variants={animateOptions} initial="initial" animate={variant}>
        {subNavOptions.subNavOpen && (
          <motion.div>
            <SubNavHeader>{subNavOptions.activeNavHeading}</SubNavHeader>
            <SubNavList>
              {activeOptions.sort().map((option) => {
                return (
                  <li key={option}>
                    <Link
                      href={`${slugs[subNavOptions.activeNavHeading]}${option}`}
                      onClick={handleClick}
                    >
                      {option}
                    </Link>
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

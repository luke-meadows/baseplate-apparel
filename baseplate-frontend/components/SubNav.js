import { forwardRef, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Ctx } from '../lib/CtxProvider';
import { StyledSubNav, SubNavHeader, SubNavList } from './styles/HeaderStyles';
import { motion } from 'framer-motion';
import { animateOptions } from '../lib/subNavAnimations';
import NavTriangle from './NavTriangle';
import { useNav } from '../lib/useNav';

export const SubNav = forwardRef((props, ref) => {
  const {
    subNavOpen,
    navTriangleCoords,
    activeNavHeading,
    setSubNavOpen,
    navCategories,
  } = useContext(Ctx);
  const { handleMouseLeave } = useNav();
  const [variant, setVariant] = useState();

  const slugs = {
    // these are the query parameters passed through to the product page to filter options
    brands: `/products/brands?brand=`,
    shoes: `/products/shoes?brand=`,
    clothing: `/products/clothes?type=`,
  };

  useEffect(() => {
    if (subNavOpen) {
      setVariant('animate');
    } else {
      setVariant('hidden');
    }
  }, [subNavOpen]);

  function closeSubnav() {
    setSubNavOpen(false);
  }

  const activeOptions = navCategories[activeNavHeading] || navCategories.brands; // Gets the list of subnav data based on what nav item is hovered

  return (
    <StyledSubNav
      className={subNavOpen ? 'box-shadow' : ''}
      layout
      ref={ref}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div variants={animateOptions} initial="initial" animate={variant}>
        {subNavOpen && (
          <motion.div>
            <SubNavHeader>{activeNavHeading}</SubNavHeader>
            <SubNavList>
              {activeOptions.sort().map((option) => {
                return (
                  <li key={option} onClick={closeSubnav}>
                    <Link href={`${slugs[activeNavHeading]}${option}`}>
                      {option}
                    </Link>
                  </li>
                );
              })}
            </SubNavList>
            <motion.h5 className="bottom-header" onClick={closeSubnav}>
              <Link href={`/products/${activeNavHeading}`}>View All</Link>
            </motion.h5>
          </motion.div>
        )}
      </motion.div>
      {subNavOpen && <NavTriangle coords={navTriangleCoords} />}
    </StyledSubNav>
  );
});

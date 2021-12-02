import { forwardRef, useContext } from 'react';
import Link from 'next/link';
import { NavCtx } from '../lib/NavCtxProvider';
import { StyledSubNav, SubNavHeader, SubNavList } from './styles/HeaderStyles';

export const SubNav = forwardRef((props, ref) => {
  const { subNavOptions, handleMouseLeave, navCategories } = useContext(NavCtx);

  return (
    <StyledSubNav layout ref={ref} onMouseLeave={handleMouseLeave}>
      {subNavOptions.subNavOpen && (
        <div layout="true">
          <SubNavHeader>{subNavOptions.activeNavHeading}</SubNavHeader>
          <SubNavList>
            {console.log({ navCategories })}
            {[...navCategories]
              .sort((a, b) => (a.brand > b.brand ? 1 : -1))
              .map((navCategories, i) => {
                return (
                  <li>
                    <Link href="/">{navCategories.brand}</Link>
                  </li>
                );
              })}
          </SubNavList>
          <h5 className="bottom-header ">
            <Link href="/">View All</Link>
          </h5>
        </div>
      )}
    </StyledSubNav>
  );
});

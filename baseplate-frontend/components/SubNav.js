import { forwardRef, useContext } from 'react';
import Link from 'next/link';
import { NavCtx } from '../lib/NavCtxProvider';
import { StyledSubNav, SubNavHeader, SubNavList } from './styles/HeaderStyles';

export const SubNav = forwardRef((props, ref) => {
  const { subNavOptions, handleMouseLeave, navCategories } = useContext(NavCtx);
  const activeOptions = // Gets the list of subnav data based on what nav item is hovered
    navCategories[subNavOptions.activeNavHeading] || navCategories.brands;
  return (
    <StyledSubNav layout ref={ref} onMouseLeave={handleMouseLeave}>
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
    </StyledSubNav>
  );
});

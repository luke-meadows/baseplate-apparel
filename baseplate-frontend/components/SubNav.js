import { forwardRef, useContext } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { StyledSubNav } from './styles/HeaderStyles';

export const SubNav = forwardRef((props, ref) => {
  const { subNavOptions, handleMouseLeave, navCategories } = useContext(NavCtx);

  return (
    <StyledSubNav layout ref={ref} onMouseLeave={handleMouseLeave}>
      {subNavOptions.subNavOpen && (
        <div layout="true">
          <h1>{subNavOptions.activeNavHeading}</h1>
          {navCategories.map((navCategories) => {
            return <div>{navCategories.brand}</div>;
          })}
        </div>
      )}
    </StyledSubNav>
  );
});

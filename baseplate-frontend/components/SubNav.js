import { forwardRef, useContext } from 'react';
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
      {subNavOptions.subNavOpen && (
        <div layout="true">
          <h1>{subNavOptions.activeNavHeading}</h1>
          <div>NavItem</div>
          <div>NavItem</div>
          <div>NavItem</div>
          <div>NavItem</div>
        </div>
      )}
    </StyledSubNav>
  );
});

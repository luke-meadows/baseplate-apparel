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
        <div layout>
          <div layout>NavItem</div>
          <div layout>NavItem</div>
          <div layout>NavItem</div>
          <div layout>NavItem</div>
          <div layout>NavItem</div>
        </div>
      )}
    </StyledSubNav>
  );
});

import { createContext, useState } from 'react';

export const NavCtx = createContext();

export const NavCtxProvider = ({ children }) => {
  const [subNavOptions, setSubNavOptions] = useState({
    subNavRect: null,
    navRect: null,
    subNavOpen: false,
    activeNavHeading: 'brands',
  });

  function handleNavItemHover(e) {
    const value = e.target.textContent;
    setSubNavOptions({
      ...subNavOptions,
      subNavOpen: true,
      activeNavHeading: value.toLowerCase(),
    });
  }

  function handleMouseLeave(e) {
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    const navX = subNavOptions.navRect.x;
    const navY = subNavOptions.navRect.y;
    const navWidth = subNavOptions.navRect.width;
    const subNavY = subNavOptions.subNavRect.y;

    // Areas of screen that should trigger the nav to close if hovered over.
    const isInBlock1 = pointerX < navX && pointerY < subNavY;
    const isInBlock2 = pointerX > navX + navWidth && pointerY < subNavY;
    const isInBlock3 = pointerY <= navY;
    const isInBlock4 = pointerY > 100;

    // true will close nav.
    const shouldCloseNav = isInBlock1 || isInBlock2 || isInBlock3 || isInBlock4;

    if (shouldCloseNav) {
      setSubNavOptions({ ...subNavOptions, subNavOpen: false });
    }
    return;
  }

  return (
    <NavCtx.Provider
      value={{
        subNavOptions,
        setSubNavOptions,
        // handleMouseEnter,
        handleMouseLeave,
        handleNavItemHover,
      }}
    >
      {children}
    </NavCtx.Provider>
  );
};

import { createContext, useState } from 'react';

export const NavCtx = createContext();
export const NavCtxProvider = ({ children }) => {
  const [stopScrolling, setStopScrolling] = useState(false);
  const [subNavOptions, setSubNavOptions] = useState({
    subNavRect: null,
    navRect: null,
    subNavOpen: false,
    activeNavHeading: 'brands',
    navTriangleCoords: '',
  });

  const [navCategories, setNavCategories] = useState({
    brands: [],
    shoes: [],
    clothes: [],
    accessories: [],
  }); // data from the backend to populate subnav options

  const [searchActive, setSearchActive] = useState(false);

  function handleNavItemHover(e) {
    const value = e.target.textContent;
    const { offsetLeft, offsetWidth } = e.currentTarget;
    const navTriangleCoords = offsetLeft + offsetWidth / 2;
    if (searchActive) return;
    setSubNavOptions({
      ...subNavOptions,
      subNavOpen: true,
      activeNavHeading: value.toLowerCase(),
      navTriangleCoords,
    });
  }

  function handleMouseLeave(e) {
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    const navX = subNavOptions.navRect.x;
    const navY = subNavOptions.navRect.y;
    const navWidth = subNavOptions.navRect.width - 5;
    const subNavY = subNavOptions.subNavRect.y;

    // areas of screen that should trigger the nav to close if hovered over.
    const isInBlock1 = pointerX < navX && pointerY < subNavY;
    const isInBlock2 = pointerX > navX + navWidth && pointerY < subNavY;
    const isInBlock3 = pointerY <= navY + 2;
    const isInBlock4 = pointerY > 100;

    // true will close nav.
    const shouldCloseNav = isInBlock1 || isInBlock2 || isInBlock3 || isInBlock4;

    if (shouldCloseNav) {
      setSubNavOptions({
        ...subNavOptions,
        subNavOpen: false,
        navTriangleCoords: {},
      });
    }
    return;
  }

  return (
    <NavCtx.Provider
      value={{
        subNavOptions,
        setSubNavOptions,
        handleMouseLeave,
        handleNavItemHover,
        setNavCategories,
        navCategories,
        searchActive,
        setSearchActive,
        stopScrolling,
        setStopScrolling,
      }}
    >
      {children}
    </NavCtx.Provider>
  );
};

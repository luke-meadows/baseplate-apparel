import { createContext, useState } from 'react';

export const Ctx = createContext();

export const CtxProvider = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [stopScrolling, setStopScrolling] = useState(false);
  const [accountActive, setAccountActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [subNavOpen, setSubNavOpen] = useState(false);
  const [subNavRect, setSubNavRect] = useState(null);
  const [navRect, setNavRect] = useState(null);
  const [navTriangleCoords, setNavTriangleCoords] = useState(null);
  const [activeNavHeading, setActiveNavHeading] = useState();
  const [cartActive, setCartActive] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const [navCategories, setNavCategories] = useState({
    brands: [],
    shoes: [],
    clothes: [],
    accessories: [],
  }); // data from the backend to populate subnav options
  return (
    <Ctx.Provider
      value={{
        navCategories,
        setNavCategories,
        searchActive,
        setSearchActive,
        stopScrolling,
        setStopScrolling,
        showFilters,
        setShowFilters,
        accountActive,
        setAccountActive,
        subNavOpen,
        setSubNavOpen,
        subNavRect,
        setSubNavRect,
        navRect,
        setNavRect,
        navTriangleCoords,
        setNavTriangleCoords,
        activeNavHeading,
        setActiveNavHeading,
        cartActive,
        setCartActive,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

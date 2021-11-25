import { createContext, useState } from 'react';

export const NavCtx = createContext();

export const NavCtxProvider = ({ children }) => {
  const [subNavOptions, setSubNavOptions] = useState({
    subNavRect: '',
    navRect: '',
    subNavOpen: false,
  });
  console.log(subNavOptions);
  return (
    <NavCtx.Provider value={[subNavOptions, setSubNavOptions]}>
      {children}
    </NavCtx.Provider>
  );
};

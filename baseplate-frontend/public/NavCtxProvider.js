import { createContext, useState } from 'react';
import { wait } from '../components/lib/wait';

export const NavCtx = createContext();

export const NavCtxProvider = ({ children }) => {
  const [subNavOptions, setSubNavOptions] = useState({
    subNavRect: '',
    navRect: '',
    subNavOpen: false,
  });

  console.log(subNavOptions);

  async function handleMouseLeave(e) {
    await wait(100);
    setSubNavOptions({
      ...subNavOptions,
      subNavOpen: false,
    });
  }

  function handleMouseEnter() {
    setSubNavOptions({
      ...subNavOptions,
      subNavOpen: true,
    });
  }

  return (
    <NavCtx.Provider
      value={{
        subNavOptions,
        setSubNavOptions,
        handleMouseEnter,
        handleMouseLeave,
      }}
    >
      {children}
    </NavCtx.Provider>
  );
};

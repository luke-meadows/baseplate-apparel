import { useContext } from 'react';
import { Ctx } from './CtxProvider';

export function useNav() {
  const {
    setSubNavOpen,
    setActiveNavHeading,
    navRect,
    subNavRect,
    setNavTriangleCoords,
    searchActive,
  } = useContext(Ctx);

  function handleNavItemHover(e) {
    // takes position of nav heading / moves triangle to it / opens subnav with relevant list items.
    const value = e.target.textContent;
    const { offsetLeft, offsetWidth } = e.currentTarget;
    const navTriangleCoords = offsetLeft + offsetWidth / 2;
    if (searchActive) return;
    setSubNavOpen(true);
    setActiveNavHeading(value.toLowerCase());
    setNavTriangleCoords(navTriangleCoords);
  }

  function handleMouseLeave(e) {
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    const navX = navRect.x;
    const navY = navRect.y;
    const navWidth = navRect.width - 5;
    const subNavY = subNavRect?.y;

    // areas of screen that should trigger the nav to close if hovered over.
    const isInBlock1 = pointerX < navX && pointerY < subNavY;
    const isInBlock2 = pointerX > navX + navWidth && pointerY < subNavY;
    const isInBlock3 = pointerY <= navY + 2;
    const isInBlock4 = pointerY > 100;

    // true will close nav.
    const shouldCloseNav = isInBlock1 || isInBlock2 || isInBlock3 || isInBlock4;

    if (shouldCloseNav) {
      setSubNavOpen(false);
      setNavTriangleCoords({});
    }
    return;
  }
  return { handleNavItemHover, handleMouseLeave };
}

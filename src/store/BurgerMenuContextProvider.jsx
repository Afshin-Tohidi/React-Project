import { createContext, useState } from "react";

const BurgerMenuContext = createContext({
  menuState: false,
  categoryState: false,
  onOpen: () => {},
  onClose: () => {},
  onCategory: () => {},
  onReturn: () => {},
});
export function BurgerMenuContextProvider({ children }) {
  const [menuState, setMenuState] = useState(false);
  const [categoryState, setCategoryState] = useState(false);

  function onOpen() {
    setMenuState(true);
  }

  function onClose() {
    setMenuState(false);
  }

  function onCategory() {
    setCategoryState(true);
  }

  function onReturn() {
    setCategoryState(false);
  }

  const menuContext = {
    menuState,
    onClose,
    onOpen,
    categoryState,
    onCategory,
    onReturn,
  };

  return (
    <BurgerMenuContext.Provider value={menuContext}>
      {children}
    </BurgerMenuContext.Provider>
  );
}

export default BurgerMenuContext;

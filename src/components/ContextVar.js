import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const ContextVar = ({ children }) => {
  const [menuSelected, setMenuSelected] = useState('home');
  const [showMenu, setShowMenu] = useState(false);
  return (
    <MyContext.Provider value={{ menuSelected, setMenuSelected, showMenu, setShowMenu }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

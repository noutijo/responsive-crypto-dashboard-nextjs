import React, { useState } from "react";

type asideType = {
  isopen: boolean;
  setMenuStatus: (a: (a: boolean) => boolean) => void;
};

const asideContext = React.createContext<asideType>({
  isopen: false,
  setMenuStatus: () => {},
});

export const useDrawer = () => {
  return React.useContext(asideContext);
};

export const AsideBarPrivider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isopen, setMenuStatus] = useState<boolean>(false);

  return (
    <asideContext.Provider value={{ isopen, setMenuStatus }}>
      {children}
    </asideContext.Provider>
  );
};

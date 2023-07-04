import { createContext, useState } from "react";

interface ICardContextData {
  changeLogo: boolean;
  setChangeLogo: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ICardContextProvider {
  children: React.ReactNode;
}

export const CardContext = createContext({} as ICardContextData);

export const CardContextProvider = ({ children }: ICardContextProvider) => {
  const [changeLogo, setChangeLogo] = useState<boolean>(false);

  return (
    <CardContext.Provider
      value={{
        changeLogo,
        setChangeLogo,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

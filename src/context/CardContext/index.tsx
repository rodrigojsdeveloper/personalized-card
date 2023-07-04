import { createContext, useState } from "react";

interface ICardContextData {
  changeLogo: boolean;
  setChangeLogo: React.Dispatch<React.SetStateAction<boolean>>;
  changeName: string;
  setChangeName: React.Dispatch<React.SetStateAction<string>>;
  changeSize: boolean;
  setChangeSize: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ICardContextProvider {
  children: React.ReactNode;
}

export const CardContext = createContext({} as ICardContextData);

export const CardContextProvider = ({ children }: ICardContextProvider) => {
  const [changeLogo, setChangeLogo] = useState<boolean>(false);

  const [changeName, setChangeName] = useState<string>("");

  const [changeSize, setChangeSize] = useState<boolean>(false);

  return (
    <CardContext.Provider
      value={{
        changeLogo,
        setChangeLogo,
        changeName,
        setChangeName,
        changeSize,
        setChangeSize,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

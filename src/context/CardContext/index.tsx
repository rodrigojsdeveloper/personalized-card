import { createContext, useState } from "react";

interface ICardContextData {
  changeLogo: boolean;
  setChangeLogo: React.Dispatch<React.SetStateAction<boolean>>;
  changeName: string;
  setChangeName: React.Dispatch<React.SetStateAction<string>>;
  changeSize: boolean;
  setChangeSize: React.Dispatch<React.SetStateAction<boolean>>;
  changeColor:
    | "var(--purple-linear-gradient)"
    | "var(--blue-linear-gradient)"
    | "var(--black-linear-gradient)"
    | "var(--lilac-linear-gradient)"
    | "var(--dark-blue-linear-gradient)";
  setChangeColor: React.Dispatch<
    React.SetStateAction<
      | "var(--purple-linear-gradient)"
      | "var(--blue-linear-gradient)"
      | "var(--black-linear-gradient)"
      | "var(--lilac-linear-gradient)"
      | "var(--dark-blue-linear-gradient)"
    >
  >;
}

interface ICardContextProvider {
  children: React.ReactNode;
}

export const CardContext = createContext({} as ICardContextData);

export const CardContextProvider = ({ children }: ICardContextProvider) => {
  const [changeLogo, setChangeLogo] = useState<boolean>(false);

  const [changeName, setChangeName] = useState<string>("");

  const [changeSize, setChangeSize] = useState<boolean>(false);

  const [changeColor, setChangeColor] = useState<
    | "var(--purple-linear-gradient)"
    | "var(--blue-linear-gradient)"
    | "var(--black-linear-gradient)"
    | "var(--lilac-linear-gradient)"
    | "var(--dark-blue-linear-gradient)"
  >("var(--purple-linear-gradient)");

  return (
    <CardContext.Provider
      value={{
        changeLogo,
        setChangeLogo,
        changeName,
        setChangeName,
        changeSize,
        setChangeSize,
        changeColor,
        setChangeColor,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

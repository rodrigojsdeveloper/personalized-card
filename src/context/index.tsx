import { CardContextProvider } from "./CardContext";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return <CardContextProvider>{children}</CardContextProvider>;
};

export { Providers };

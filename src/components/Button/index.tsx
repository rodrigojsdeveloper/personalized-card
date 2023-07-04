import { Container } from "./style";

interface IButton {
  color: "white" | "purple";
  children: React.ReactNode;
}

const Button = ({ color, children }: IButton) => {
  return <Container color={color}>{children}</Container>;
};

export { Button };

import { Container } from "./style";

interface IButton {
  color: "white" | "purple";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = ({ color, children, onClick }: IButton) => {
  return (
    <Container color={color} onClick={onClick}>
      {children}
    </Container>
  );
};

export { Button };

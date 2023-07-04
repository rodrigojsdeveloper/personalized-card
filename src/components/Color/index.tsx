import { Container } from "./style";

interface IColor {
  background: "purple" | "blue" | "black" | "lilac" | "dark blue";
  onClick: React.MouseEventHandler<HTMLElement>;
}

const Color = ({ background, onClick }: IColor) => {
  return <Container background={background} onClick={onClick} />;
};

export { Color };

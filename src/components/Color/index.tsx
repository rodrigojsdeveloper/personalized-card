import { Container } from "./style";

interface IColor {
  background: "purple" | "blue" | "black" | "lilac" | "dark blue";
}

const Color = ({ background }: IColor) => {
  return <Container background={background} />;
};

export { Color };

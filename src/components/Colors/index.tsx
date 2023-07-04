import { CardContext } from "../../context/CardContext";
import { Container, Content } from "./style";
import { Label } from "../Input/style";
import { useContext } from "react";
import { Color } from "../Color";

const Colors = () => {
  const { setChangeColor } = useContext(CardContext);

  return (
    <Container>
      <Label>Selecione a cor do cartão</Label>

      <Content>
        <Color
          background="purple"
          onClick={() => setChangeColor("var(--purple-linear-gradient)")}
        />
        <Color
          background="blue"
          onClick={() => setChangeColor("var(--blue-linear-gradient)")}
        />
        <Color
          background="black"
          onClick={() => setChangeColor("var(--black-linear-gradient)")}
        />
        <Color
          background="lilac"
          onClick={() => setChangeColor("var(--lilac-linear-gradient)")}
        />
        <Color
          background="dark blue"
          onClick={() => setChangeColor("var(--dark-blue-linear-gradient)")}
        />
      </Content>
    </Container>
  );
};

export { Colors };

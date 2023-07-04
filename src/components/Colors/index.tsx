import { Container, Content } from "./style";
import { Label } from "../Input/style";
import { Color } from "../Color";

const Colors = () => {
  return (
    <Container>
      <Label>Selecione a cor do cartão</Label>

      <Content>
        <Color background="purple" />
        <Color background="blue" />
        <Color background="black" />
        <Color background="lilac" />
        <Color background="dark blue" />
      </Content>
    </Container>
  );
};

export { Colors };

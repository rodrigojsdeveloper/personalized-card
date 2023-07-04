import { Container, Content } from "./style";
import { Label } from "../Input/style";
import { Button } from "../Button";

const ContainerButtons = () => {
  return (
    <Container>
      <Label>Selecione o modelo do cartão</Label>

      <Content>
        <Button color="white">Horizontal</Button>
        <Button color="purple">Vertical</Button>
      </Content>
    </Container>
  );
};

export { ContainerButtons };
